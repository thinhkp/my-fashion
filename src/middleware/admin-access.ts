import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { Role } from "@/constants/roles";
import { COOKIE_NAME } from "@/config/cookie";
import { JWT_SECRET } from "@/config/jwt";

// Sử dụng cùng JWT_SECRET đã dùng để tạo token


export async function adminAuthMiddleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Lấy token từ cookies
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      // Không có token, chuyển hướng đến trang đăng nhập
      return NextResponse.redirect(new URL("/access-denied", request.url));
    }

    try {
      // Chuyển secret key thành Uint8Array
      const secretKey = new TextEncoder().encode(JWT_SECRET);

      // Giải mã JWT token với jose
      const { payload } = await jwtVerify(token, secretKey);

      // Lấy thông tin từ payload đã giải mã
      const { userId, username, roles } = payload as any;

      // Kiểm tra role admin
      if (!roles || !Array.isArray(roles) || !roles.includes(Role.ADMIN)) {
        // Không có quyền admin, chuyển hướng
        return NextResponse.redirect(new URL("/access-denied", request.url));
      }

      // Có quyền admin, cho phép tiếp tục
    } catch (error) {
      // Token không hợp lệ hoặc hết hạn
      console.error("Invalid token:", error);
      return NextResponse.redirect(new URL("/access-denied", request.url));
    }
  }

  // Cho phép request tiếp tục
  return NextResponse.next();
}
