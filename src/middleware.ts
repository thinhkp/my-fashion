import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import {adminAuthMiddleware} from '@/middleware/admin-access'
 
// This function can be marked `async` if using `await` inside
export  async function middleware(request: NextRequest) {

const res = await adminAuthMiddleware(request)
if(res !== NextResponse.next()) return res



  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*', // Áp dụng middleware cho tất cả các route con của /admin
};