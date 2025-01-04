import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';
import { ILoginRequest } from './interfaces';

export const login = (data: ILoginRequest) => customFetch<ILoginRequest>(
  { path: ApiPath.auth.sign_in, method: 'POST' },
  data,
);

export const registration = (data: ILoginRequest) => customFetch<ILoginRequest>(
  { path: ApiPath.auth.sign_up, method: 'POST' },
  data,
);

export const checkAuthToken = () => customFetch(
  { path: ApiPath.auth.check_token_valid, method: 'POST', isProtected: true },
);
