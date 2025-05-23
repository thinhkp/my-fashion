// File: /app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Clear the session cookie by setting it to expire immediately
    (await cookies()).set({
      name: "sessionId",
      value: "",
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: -1, // Expire immediately
      sameSite: "strict",
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Đăng xuất thành công",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi đăng xuất" },
      { status: 500 }
    );
  }
}