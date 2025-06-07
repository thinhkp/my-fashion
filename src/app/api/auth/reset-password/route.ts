import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { z } from "zod";
import { jwtVerify } from "jose";
import { JWT_SECRET } from "@/config/jwt";

const resetPasswordSchema = z.object({
  token: z.string().min(1, "Token không hợp lệ"),
  password: z
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .regex(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
    .regex(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
    .regex(/[0-9]/, "Mật khẩu phải có ít nhất 1 số"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const validationResult = resetPasswordSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(
        (error) => error.message
      );
      return NextResponse.json(
        { success: false, message: errorMessages.join(", ") },
        { status: 400 }
      );
    }

    const { token, password } = validationResult.data;

    // Verify JWT token với jose
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let decodedToken: any;
    try {
      const secretKey = new TextEncoder().encode(JWT_SECRET);
      const { payload } = await jwtVerify(token, secretKey);
      decodedToken = payload;
    } catch  {
      return NextResponse.json(
        {
          success: false,
          message: "Token không hợp lệ hoặc đã hết hạn",
        },
        { status: 400 }
      );
    }

    // Kiểm tra type của token
    if (decodedToken.type !== "password_reset") {
      return NextResponse.json(
        {
          success: false,
          message: "Token không hợp lệ",
        },
        { status: 400 }
      );
    }

    // Tìm user theo userId từ token
    const user = await prisma.user.findUnique({
      where: { userId: decodedToken.userId },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Người dùng không tồn tại",
        },
        { status: 400 }
      );
    }

    // Cập nhật mật khẩu mới
    await prisma.user.update({
      where: { userId: user.userId },
      data: {
        password: password, // Lưu password trực tiếp như yêu cầu
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Đặt lại mật khẩu thành công",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Đã xảy ra lỗi khi xử lý yêu cầu",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
