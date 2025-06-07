import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { getUserById } from "@/services/data";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "@/services/prisma";

// Sử dụng cùng JWT_SECRET đã dùng để tạo token
import { JWT_SECRET } from "@/config/jwt";

// Schema for profile update validation


// Schema for profile update validation - making all fields optional
const partialUpdateProfileSchema = z.object({
  displayname: z
    .string()
    .min(2, { message: "Tên hiển thị phải có ít nhất 2 ký tự" })
    .max(50, { message: "Tên hiển thị không được vượt quá 50 ký tự" })
    .optional(),
  phone: z
    .string()
    .min(10, { message: "Số điện thoại phải có ít nhất 10 số" })
    .max(15, { message: "Số điện thoại không được vượt quá 15 số" })
    .optional()
    .nullable()
    .or(z.literal("")),
  address: z
    .string()
    .max(200, { message: "Địa chỉ không được vượt quá 200 ký tự" })
    .optional()
    .nullable()
    .or(z.literal("")),
});

export async function GET(request: NextRequest) {
  try {
    // Lấy token từ cookies
    const token = request.cookies.get("sessionId")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized - No token provided" },
        { status: 401 }
      );
    }

    // Chuyển secret key thành Uint8Array
    const secretKey = new TextEncoder().encode(JWT_SECRET);

    // Giải mã JWT token
    const { payload } = await jwtVerify(token, secretKey);
    // eslint-disable-next-line
    const { userId } = payload as any;

    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token - Missing user ID" },
        { status: 401 }
      );
    }

    // Lấy thông tin user từ database
    const user: Prisma.userGetPayload<{
      include: { userRoles: { include: { role: true } } };
    }> = await getUserById(userId, {
      include: { userRoles: { include: { role: true } } },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    //  Sử lý thông tin nhạy cảm trước khi trả về
    {
      const { userId, displayname, email , phone , address} = user;
      const roles = user.userRoles.map((ur) => ur.role.name);

      // Trả về thông tin user an toàn
      return NextResponse.json(
        {
          user: { userId, displayname, roles, email ,phone ,address },
          message: "User data retrieved successfully",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Schema for password change validation
const passwordChangeSchema = z
  .object({
    currentPassword: z.string().min(6),
    newPassword: z.string().min(8).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// PATCH: Update user profile or change password
export async function PATCH(request: NextRequest) {
  try {
    // Lấy token từ cookies
    const token = request.cookies.get("sessionId")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized - No token provided" },
        { status: 401 }
      );
    }

    // Chuyển secret key thành Uint8Array
    const secretKey = new TextEncoder().encode(JWT_SECRET);

    // Giải mã JWT token
    const { payload } = await jwtVerify(token, secretKey);
    // eslint-disable-next-line
    const { userId } = payload as any;

    if (!userId) {
      return NextResponse.json(
        { error: "Invalid token - Missing user ID" },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Check if this is a password change request
    if (body.currentPassword !== undefined && body.newPassword !== undefined) {
      // Validate password change data
      const validationResult = passwordChangeSchema.safeParse(body);

      if (!validationResult.success) {
        return NextResponse.json(
          {
            error: "Dữ liệu không hợp lệ",
            details: validationResult.error.format(),
          },
          { status: 400 }
        );
      }

      const { currentPassword, newPassword } = validationResult.data;

      // Get user from database with password
      const user = await prisma.user.findUnique({
        where: { userId: userId },
        select: { password: true },
      });

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Verify current password directly (no hashing)
      if (currentPassword !== user.password) {
        return NextResponse.json(
          { error: "incorrect_password" },
          { status: 400 }
        );
      }

      // Update with plain text password
      await prisma.user.update({
        where: { userId: userId },
        data: { password: newPassword },
      });

      return NextResponse.json({
        message: "Đổi mật khẩu thành công",
      });
    } else {
      // This is a profile update request - support partial updates
      const validationResult = partialUpdateProfileSchema.safeParse(body);

      if (!validationResult.success) {
        return NextResponse.json(
          {
            error: "Dữ liệu không hợp lệ",
            details: validationResult.error.format(),
          },
          { status: 400 }
        );
      }

      // Get the validated data
      const validatedData = validationResult.data;

      // First get current user data
      const currentUser = await prisma.user.findUnique({
        where: { userId },
        select: {
          email: true,
          displayname: true,
          phone: true,
          address: true,
        },
      });

      if (!currentUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Prepare update data object with only provided fields
      const updateData: {
        displayname?: string;
        phone?: string | null;
        address?: string | null;
      } = {};

      // Only include fields that were provided in the request
      if (validatedData.displayname !== undefined) {
        updateData.displayname = validatedData.displayname;
      }

      if (validatedData.phone !== undefined) {
        updateData.phone =
          validatedData.phone === "" ? null : validatedData.phone;
      }

      if (validatedData.address !== undefined) {
        updateData.address =
          validatedData.address === "" ? null : validatedData.address;
      }

      // Only perform update if there are fields to update
      if (Object.keys(updateData).length === 0) {
        return NextResponse.json({
          message: "Không có thông tin nào được cập nhật",
          user: {
            email: currentUser.email,
            displayname: currentUser.displayname,
            phone: currentUser.phone,
            address: currentUser.address,
          },
        });
      }

      // Update user profile with only the provided fields
      const updatedUser = await prisma.user.update({
        where: { userId },
        data: updateData,
        include: {
          userRoles: {
            include: {
              role: true,
            },
          },
        },
      });

      // Prepare response data
      const roles = updatedUser.userRoles.map((ur) => ur.role.name);

      return NextResponse.json({
        message: "Cập nhật thông tin thành công",
        user: {
          userId: updatedUser.userId,
          email: updatedUser.email,
          displayname: updatedUser.displayname,
          phone: updatedUser.phone,
          address: updatedUser.address,
          roles,
        },
      });
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Không thể cập nhật thông tin người dùng" },
      { status: 500 }
    );
  }
}
