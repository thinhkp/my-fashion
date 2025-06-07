import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/prisma";
import { z } from "zod";
import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "@/config/mailer";
import { SignJWT } from "jose";
import { JWT_SECRET } from "@/config/jwt";
import { BASE_DOMAIN } from "@/config/domain";

// Validation schema cho forgot password
const forgotPasswordSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate request body
    const validationResult = forgotPasswordSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(
        (error) => error.message
      );
      return NextResponse.json(
        { success: false, message: errorMessages.join(", ") },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    // Kiểm tra xem email có tồn tại trong database không
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        userId: true,
        email: true,
        displayname: true,
      },
    });

    // Trả về lỗi nếu email không tồn tại
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Email này không tồn tại trong hệ thống",
        },
        { status: 404 }
      );
    }

    // Tạo JWT reset token với jose
    const secretKey = new TextEncoder().encode(JWT_SECRET);

    const resetToken = await new SignJWT({
      userId: user.userId,
      email: user.email,
      type: "password_reset",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1h") // 1 hour
      .setIssuedAt()
      .sign(secretKey);

    // Tạo link reset password
    const resetLink = `${BASE_DOMAIN}/auth/reset-password?token=${resetToken}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Tạo HTML email với button đẹp
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Đặt lại mật khẩu</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">My Fashion</h1>
            <p style="color: #fce7f3; margin: 10px 0 0 0; font-size: 16px;">Đặt lại mật khẩu tài khoản</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 24px;">Xin chào ${user.displayname}!</h2>
            
            <p style="color: #4b5563; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
              Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. 
              Nhấp vào nút bên dưới để tạo mật khẩu mới:
            </p>
            
            <!-- Reset Button -->
            <div style="text-align: center; margin: 40px 0;">
              <a href="${resetLink}" 
                 style="display: inline-block; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); 
                        color: #ffffff; text-decoration: none; padding: 16px 32px; 
                        border-radius: 12px; font-weight: bold; font-size: 16px; 
                        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3); 
                        transition: all 0.3s ease;">
                🔐 Đặt lại mật khẩu
              </a>
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px; font-weight: bold;">
                Hoặc copy và paste link sau vào trình duyệt:
              </p>
              <p style="color: #3b82f6; word-break: break-all; margin: 0; font-size: 14px;">
                ${resetLink}
              </p>
            </div>
            
            <!-- Warning -->
            <div style="border-left: 4px solid #f59e0b; background-color: #fffbeb; padding: 16px; margin: 30px 0;">
              <p style="color: #92400e; margin: 0; font-size: 14px;">
                <strong>⚠️ Lưu ý quan trọng:</strong><br>
                • Link này sẽ hết hạn sau <strong>1 giờ</strong><br>
                • Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này<br>
                • Không chia sẻ link này với bất kỳ ai
              </p>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6; margin: 30px 0 0 0; font-size: 16px;">
              Nếu bạn gặp khó khăn khi nhấp vào nút trên, hãy copy và paste link vào thanh địa chỉ của trình duyệt.
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
              Trân trọng,<br>
              <strong>Đội ngũ hỗ trợ My Fashion</strong>
            </p>
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              Email này được gửi tự động, vui lòng không trả lời.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      const result = await transporter.sendMail({
        from: `"My Fashion" <${EMAIL_USER}>`,
        to: user.email,
        subject: "🔐 Đặt lại mật khẩu - My Fashion",
        html: htmlContent,
      });

    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json(
        {
          success: false,
          message: "Không thể gửi email. Vui lòng thử lại sau." + emailError,
        },
        { status: 500 }
      );
    }

    // Trả về thành công khi đã gửi email
    return NextResponse.json(
      {
        success: true,
        message: "Hướng dẫn đặt lại mật khẩu đã được gửi đến email của bạn",
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
