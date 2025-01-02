import { getServerCookie } from '../../utils/cookies';
import { stringifySearchParams } from '../../utils/searchParams';

export type THTTPRequestMethod = 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type TURIScheme = 'http' | 'https';

export interface IHttpRequestConfig {
  path: string;
  method: THTTPRequestMethod;
  headers?: [string, string][] | Record<string, string>;
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

export interface IResponse {
  response: Response | null;
  error: IErrorResponse | null;
}

/**
 * Выполняет HTTP-запрос с указанными настройками и данными.
 *
 * @param {IHttpRequestConfig} settings - Настройки запроса
 * @param {TRequestPayload} [data] - Данные для отправки
 *
 * @returns {Promise<IResponse | Response>} Результат запроса
 * - Если withErrorHandling=true, возвращает объект {response, error}
 * - Если withErrorHandling=false, возвращает объект Response напрямую
 */
export function customFetch<TRequestPayload = IRequestData>(
  settings: IHttpRequestConfig & { withErrorHandling: true },
  data?: TRequestPayload,
): Promise<IResponse>;

export function customFetch<TRequestPayload = IRequestData>(
  settings: IHttpRequestConfig & { withErrorHandling?: false },
  data?: TRequestPayload,
): Promise<Response>;

export async function customFetch<TRequestPayload = IRequestData>(
  settings: IHttpRequestConfig,
  data?: TRequestPayload,
): Promise<IResponse | Response> {
  const {
    path,
    method,
    headers = [],
    scheme = 'http',
    port,
    contentType = 'application/json',
    withCredentials = false,
    withErrorHandling = false,
  } = settings;

  const makeRequest = async (): Promise<Response> => {
    const host = process.env.NEXT_PUBLIC_API_URL;

    if (!host) {
      throw new Error('Backend host is not defined');
    }

    const query = data && method === 'GET' ? `?${stringifySearchParams(data)}` : '';
    const body = data && method !== 'GET' ? JSON.stringify(data) : undefined;

    const url = `${scheme}://${host}${port ? `:${port}` : ''}${path}${query}`;

    const authHeader = getServerCookie('x-auth');

    const headersObject = Array.isArray(headers) ? Object.fromEntries(headers) : headers || {};

    const combinedHeaders: Record<string, string> = {
      ...headersObject,
      'Content-Type': contentType,
      'x-auth': (await authHeader)?.value ?? '',
    };

    const response = await fetch(url, {
      method,
      body,
      headers: combinedHeaders,
      credentials: withCredentials ? 'include' : 'omit',
      cache: 'no-store',
    });

    return response;
  };

  if (withErrorHandling) {
    try {
      const response = await makeRequest();

      if (!response.ok) {
        let errorMessage = `Request failed with status ${response.status}`;

        try {
          const errorData = await response.json();

          errorMessage = errorData.message || errorMessage;
        } catch (error) {
          throw error;
        }

        return {
          response: null,
          error: {
            code: response.status,
            message: errorMessage,
          },
        };
      }

      return {
        response,
        error: null,
      };
    } catch (e: any) {
      return {
        response: null,
        error: {
          code: e?.status || 500,
          message:
            e?.message || `Неизвестная ошибка запроса к сервису ${settings.path}`,
        },
      };
    }
  }

  return makeRequest();
}
