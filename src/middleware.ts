import { NextRequest, NextResponse } from 'next/server';
import { checkAuthToken } from './services/checkAuthToken/api';

const protectedRoutes = ['/dashboard'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));

  if (isProtectedRoute) {
    try {
      await checkAuthToken();

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}
