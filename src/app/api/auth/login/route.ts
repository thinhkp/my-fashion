// File: /app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";
import { getUserByUsername } from "@/services/data";
import { Prisma } from "@/generated/prisma";

// JWT secret key - in production, store this in environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { username, password } = body;

    // Validate required fields
    if (!username || !password) {
      return NextResponse.json(
        { error: "Email và mật khẩu là bắt buộc" },
        { status: 400 }
      );
    }

    // Find user by email
    const user: Prisma.userGetPayload<{
      include: { userRoles: { include: { role : true} } };
    }> = await getUserByUsername(username, {
      include: { userRoles: { include: { role : true} } },
    });

    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Email hoặc mật khẩu không chính xác" },
        { status: 401 }
      );
    }

    // Create JWT token instead of UUID
    const token = sign(
      {
        userId: user.userId,
        username: user.username,
        roles: user.userRoles.map((item => item.role.name)) // Include role if available
      },
      JWT_SECRET,
      { algorithm : "HS256"} // Token expires after 24 hours
    );

    // No need to store session in database with JWT (stateless)
    // If you need to track sessions or implement logout, consider
    // still storing some session info or using a token blacklist

    // Set the cookie with the JWT token
    (await cookies()).set({
      name: "sessionId", // You could rename this to 'authToken' for clarity
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day in seconds
      sameSite: "strict",
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Đăng nhập thành công",
      user: {
        userId: user.userId,
        username: user.username,
        role: user.userRoles.map((item) => item.role.name), // Include role if available
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi đăng nhập" },
      { status: 500 }
    );
  }
}
