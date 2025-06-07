// Tệp cấu hình Prisma client
import { PrismaClient } from "@prisma/client";

// Biến global để lưu trữ instance PrismaClient giữa các hot reloads
declare global {
  // eslint-disable-next-line
  var prisma: PrismaClient | undefined;
}

// Tạo và export một instance duy nhất của PrismaClient
export const prisma =
  global.prisma ||
  new PrismaClient({
    // log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    log: [],
  });

// Trong môi trường development, gán instance vào biến global để tránh
// tạo nhiều kết nối do hot reloading
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
