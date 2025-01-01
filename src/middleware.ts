import { NextRequest, NextResponse } from 'next/server';
import { checkAuthToken } from './services/authentication/request';
import { ROUTES } from './constants/Routes';

const protectedRoutes = ['/profile']; // Список защищенных маршрутов
const authPages = ['/login']; // Страницы, доступ к которым запрещен аутентифицированным пользователям

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
  const isAuthPage = authPages.some((route) => path.startsWith(route));

  if (isProtectedRoute || isAuthPage) {
    let isAuthenticated = false;

    try {
      const token = request.cookies.get('x-auth')?.value;

      if (!token) {
        isAuthenticated = false;
      } else {
        const response = await checkAuthToken();

        if (response.ok) {
          isAuthenticated = true;
        }
      }
    } catch (error) {
      console.error('Ошибка при проверке токена:', error);
      isAuthenticated = false;
    }

    if (isProtectedRoute && !isAuthenticated) {
      return NextResponse.redirect(new URL(ROUTES.home, request.url));
    }

    if (isAuthPage && isAuthenticated) {
      return NextResponse.redirect(new URL(ROUTES.home, request.url));
    }
  }

  return NextResponse.next();
}
