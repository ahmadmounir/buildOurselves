import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session
  await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = req.nextUrl.pathname

  const isAdminRoute = pathname.startsWith('/admin')
  const isLoginPage = pathname === '/login'

  // 🔐 Protect /admin/* routes
  if (isAdminRoute && (!user || !user.email)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // 🚫 Prevent logged-in users from accessing /login
  if (isLoginPage && user?.email) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url))
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}