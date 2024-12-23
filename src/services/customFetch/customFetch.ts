import { cookies } from 'next/headers';
import { stringifySearchParams } from '../../utils/searchParams/searchParams';
import { THttpStatusCode } from '../HttpStatusCode';

export type THTTPRequestMethod = 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type TURIScheme = 'http' | 'https';

export interface IHttpRequestConfig {
  path: string;
  method: THTTPRequestMethod;
  headers?: [string, string][];
  scheme?: TURIScheme;
  port?: number;
  contentType?: string;
  isProtected?: boolean;
  withCredentials?: boolean;
  withErrorHandling?: boolean;
}

export type RequestDataValue = string | number | null | boolean | void | Array<RequestDataValue>;

export interface IRequestData {
  [key: string]: RequestDataValue | IRequestData;
}

interface IErrorResponse {
  code: number;
  message: string;
}

interface IResponse<T> {
  data: T | null;
  error: IErrorResponse | null;
}

/**
 *
 * @template TResponsePayload - Тип данных ответа
 * @template TRequestPayload - Тип данных запроса
 *
 * @param {IHttpRequestConfig} settings - Настройки запроса
 * @param {string} settings.path - Путь запроса
 * @param {THTTPRequestMethod} settings.method - HTTP метод
 * @param {[string, string][]} [settings.headers] - Дополнительные заголовки
 * @param {TURIScheme} [settings.scheme] - Протокол (http/https)
 * @param {number} [settings.port] - Порт
 * @param {string} [settings.contentType] - Тип контента
 * @param {boolean} [settings.withCredentials] - флаг отправлять ли куки
 * @param {boolean} [settings.withErrorHandling] - флаг включить ли обработку ошибок
 *
 * @param {TRequestPayload} [data] - Данные для отправки
 *
 * @returns {Promise<IResponse<TResponsePayload> | TResponsePayload>} Результат запроса
 * - Если withErrorHandling=true, возвращает объект {data, error}
 * - Если withErrorHandling=false, возвращает данные напрямую
 *
 * @throws {Error} Выбрасывает ошибку, если не задан хост бэкенда
 */
export function customFetch<TResponsePayload = unknown, TRequestPayload = IRequestData>(
  settings: IHttpRequestConfig & { withErrorHandling: true },
  data?: TRequestPayload,
): Promise<IResponse<TResponsePayload>>;

export function customFetch<TResponsePayload = unknown, TRequestPayload = IRequestData>(
  settings: IHttpRequestConfig & { withErrorHandling?: false },
  data?: TRequestPayload,
): Promise<TResponsePayload>;

export async function customFetch<TResponsePayload = unknown, TRequestPayload = IRequestData>(
  {
    path,
    method,
    headers = [],
    scheme = 'http',
    port,
    contentType = 'application/json',
    isProtected = false,
    withCredentials = true,
    withErrorHandling = false,
  }: IHttpRequestConfig,
  data?: TRequestPayload,
): Promise<IResponse<TResponsePayload> | TResponsePayload> {
  const makeRequest = async (): Promise<TResponsePayload> => {
    const host = process.env.BROWSER_BACKEND_SERVER;

    if (!host) {
      throw new Error('Backend host is not defined');
    }

    const query = data && method === 'GET' ? `?${stringifySearchParams(data)}` : '';
    const body = data && method !== 'GET' ? JSON.stringify(data) : undefined;

    const url = `${scheme}://${host}${port ? `:${port}` : ''}${path}${query}`;

    const authHeader = (await cookies()).get('x-auth');

    const headersObject = Array.isArray(headers) ? Object.fromEntries(headers) : headers || {};

    const combinedHeaders = {
      ...headersObject,
      ...(isProtected && authHeader?.value ? { 'x-auth': authHeader.value } : {}),
      'Content-Type': contentType,
    };

    const response = await fetch(url, {
      method,
      body,
      headers: combinedHeaders,
      credentials: withCredentials ? 'include' : 'omit',
      cache: 'no-store',
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));

      const newError = {
        status: response.status as THttpStatusCode,
        error,
      };

      throw newError;
    }

    return response.json();
  };

  if (withErrorHandling) {
    try {
      const response = await makeRequest();

      return {
        data: response,
        error: null,
      };
    } catch (e) {
      return {
        data: null,
        error: {
          code: (e as any)?.status || 500,
          message: (e as any)?.message || `Неизвестная ошибка запроса к сервису ${path}`,
        },
      };
    }
  }

  return makeRequest();
}
