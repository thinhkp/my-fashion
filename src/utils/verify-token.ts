import { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { Role } from "@/constants/roles";
import { JWT_SECRET } from "@/config/jwt";

interface JWTPayload {
  userId?: number;
  roles?: string[];
  email?: string;
  [key: string]: any;
}

/**
 * Verifies if a user has admin or manager role by checking the JWT token in cookies
 * @param request - The Next.js request object containing cookies
 * @param cookieName - The name of the cookie containing the JWT token (default: "auth-token")
 * @returns Object containing authorization result and user information
 */
export async function verifyManageAccess(
  request: NextRequest,
  cookieName: string = "auth-token"
) {
  try {
    // Get JWT token from cookies
    const token = request.cookies.get(cookieName)?.value;

    if (!token) {
      return {
        authorized: false,
        error: "Authentication token not found",
        user: null,
      };
    }

    // Create a TextEncoder to encode the secret
    const encoder = new TextEncoder();

    // Get JWT secret from environment variables
    const jwtSecret = JWT_SECRET;
    if (!jwtSecret) {
      console.error("JWT_SECRET not defined in environment variables");
      return {
        authorized: false,
        error: "Server configuration error",
        user: null,
      };
    }

    // Verify token with secret key
    const { payload } = await jwtVerify(token, encoder.encode(jwtSecret));

    console.log(payload);

    const userPayload = payload as JWTPayload;

    // Check if user has admin or manager role
    // Using the Role enum for type safety and consistency
    const hasAdminAccess = userPayload.roles?.some(
        (role) => role === Role.ADMIN || role === Role.MANAGER
      );
    
    console.log("User roles:", userPayload.roles);
    

    if (hasAdminAccess) {
      return {
        authorized: true,
        error: null,
        user: {
          userId: userPayload.userId,
          roles: userPayload.roles,
          email: userPayload.email,
        },
      };
    } 
    else {
      return {
        authorized: false,
        error: "Insufficient permissions",
        user: null,
      };
    }
  } 
  catch (error) {
    console.error("Token verification error:", error);
    return {
      authorized: false,
      error: "Invalid or expired token",
      user: null,
    };
  }
}

/**
 * Simple check function to verify if user has admin access
 * Returns boolean for simpler conditional checks
 */
export async function hasManageAccess(
  request: NextRequest,
  cookieName: string = "auth-token"
): Promise<boolean> {
  const { authorized } = await verifyManageAccess(request, cookieName);
  return authorized;
}
