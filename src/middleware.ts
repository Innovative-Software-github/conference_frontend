import { NextRequest, NextResponse } from 'next/server';
import { ROUTES } from './constants/Routes';
import { getUser } from './services/user/request';

const protectedRoutes = ['/profile', '/create-event', '/create-community']; // Список защищенных маршрутов
const authPages = ['/login', '/registration']; // Страницы, доступ к которым запрещен аутентифицированным пользователям

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
        const response = await getUser();

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
