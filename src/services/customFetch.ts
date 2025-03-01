import { getServerCookie } from '../utils/cookies';
import { stringifySearchParams } from '../utils/searchParams';

export type THTTPRequestMethod = 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export type TURIScheme = 'http' | 'https';

export interface IHttpRequestConfig {
  path: string;
  method: THTTPRequestMethod;
  headers?: [string, string][] | Record<string, string>;
  scheme?: TURIScheme;
  port?: number;
  contentType?: string;
  withCredentials?: boolean;
  fetchConfig?: RequestInit;
}

export type RequestDataValue = string | number | null | boolean | void | Array<RequestDataValue>;

export interface IRequestData {
  [key: string]: RequestDataValue | IRequestData;
}

export interface IResponse<T> {
  ok: boolean;
  status: number;
  data: T;
};

export async function customFetch<TResponsePayload = unknown, TRequestPayload = IRequestData>(
  settings: IHttpRequestConfig,
  data?: TRequestPayload,
): Promise<IResponse<TResponsePayload>> {
  const {
    path,
    method,
    headers = [],
    scheme = 'http',
    port,
    contentType = 'application/json',
    withCredentials = false,
    fetchConfig,
  } = settings;

  const makeRequest = async (): Promise<IResponse<TResponsePayload>> => {
    let query = '';
    let body;
    const host = process.env.NEXT_PUBLIC_API_URL;

    if (!host) {
      throw new Error('Backend host is not defined');
    }

    if (data && !(data instanceof FormData)) {
      query = method === 'GET' ? `?${stringifySearchParams(data)}` : '';
      body = method !== 'GET' ? JSON.stringify(data) : undefined;
    } else if (data instanceof FormData) {
      body = data;
    }

    const url = `${scheme}://${host}${port ? `:${port}` : ''}${path}${query}`;

    const authHeader = getServerCookie('x-auth');

    const headersObject = Array.isArray(headers) ? Object.fromEntries(headers) : headers || {};

    // Создаем копию заголовков без 'Content-Type', если data instanceof FormData
    const combinedHeaders: Record<string, string> = {
      ...headersObject,
      'x-auth': (await authHeader)?.value ?? '',
    };

    // Если тело запроса не FormData и 'Content-Type' не установлен, устанавливаем его
    if (!(data instanceof FormData) && !combinedHeaders['Content-Type']) {
      combinedHeaders['Content-Type'] = contentType ?? 'application/json';
    }

    const response = await fetch(url, {
      method,
      body,
      headers: combinedHeaders,
      credentials: withCredentials ? 'include' : 'omit',
      cache: 'no-store',
      ...fetchConfig,
    });

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        data: { error: await response.json().catch(() => ({})) } as TResponsePayload,
      };
    }

    return {
      ok: response.ok,
      status: response.status,
      data: await response.json(),
    };
  };


  return makeRequest();
}
