import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { getUserById } from "@/services/data";
import { Prisma } from "@/generated/prisma";

// Sử dụng cùng JWT_SECRET đã dùng để tạo token
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

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
      const { userId, displayname , email  } = user;
      const roles = user.userRoles.map((ur) => ur.role.name);

      // Trả về thông tin user an toàn
      return NextResponse.json(
        {
          user: { userId, displayname, roles ,email  },
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
