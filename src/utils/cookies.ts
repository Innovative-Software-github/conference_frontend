'use server';

import { cookies } from 'next/headers';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

/*
 * Получает серверный куки по ключу.
 *
 * @param {string} key - Ключ куки
 * @returns {RequestCookie | undefined} Объект куки или undefined, если куки не найден
 */
export async function getServerCookie(key: string): Promise<RequestCookie | undefined> {
  return (await cookies()).get(key);
}

/*
 * Устанавливает серверный куки по ключу и значению.
 *
 * @param {string} key - Ключ куки
 * @param {CookieValueTypes} value - Значение куки
 * @param {CookieOptions} [options] - Дополнительные опции куки
 */
export async function setServerCookie(
  key: string,
  value: string,
  options?: {
    httpOnly?: boolean;
    expires?: Date;
    maxAge?: number;
    path?: string;
    secure?: boolean;
    sameSite?: 'lax' | 'strict' | 'none';
  },
): Promise<void> {
  // Устанавливаем куки
  (await cookies()).set(key, value, {
    httpOnly: true,
    ...options,
  });
}
