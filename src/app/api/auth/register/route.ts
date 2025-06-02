import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { z } from "zod";

// Validation schema for registration data - matches the UI form validation
const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Tên đăng nhập phải có ít nhất 3 ký tự")
    .max(50, "Tên đăng nhập không được vượt quá 50 ký tự")
    .refine((val) => /^[a-zA-Z0-9_]+$/.test(val), {
      message: "Tên đăng nhập chỉ chấp nhận chữ cái, số và dấu gạch dưới",
    }),
  email: z.string().email("Email không hợp lệ"),
  password: z
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .refine((val) => /[A-Z]/.test(val), {
      message: "Mật khẩu phải có ít nhất 1 chữ hoa",
    })
    .refine((val) => /[0-9]/.test(val), {
      message: "Mật khẩu phải có ít nhất 1 chữ số",
    }),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request body
    const validationResult = registerSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(
        (error) => error.message
      );
      return NextResponse.json(
        { success: false, message: errorMessages.join(", ") },
        { status: 400 }
      );
    }

    const { username, email, password } = validationResult.data;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return NextResponse.json(
          { success: false, message: "Tên đăng nhập đã tồn tại" },
          { status: 400 }
        );
      } else {
        return NextResponse.json(
          { success: false, message: "Email đã tồn tại" },
          { status: 400 }
        );
      }
    }

    // Create new user - storing password directly as requested
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password, // Store password directly without hashing
        displayname: username,
        userRoles: {
          create: {
            roleId: "U", // Assuming USER is a default role ID
          },
        },
      },
    });

    // Return success without exposing the password
    // eslint-disable-next-line 
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(
      {
        success: true,
        message: "Đăng ký thành công",
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Đã xảy ra lỗi khi đăng ký tài khoản",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
