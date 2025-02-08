import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';
import { ILoginRequest, ILoginResponse, IRegistrationRequest, IRegistrationResponse } from './interfaces';

export const login = (data: ILoginRequest) => customFetch<ILoginResponse, ILoginRequest>(
  { path: ApiPath.auth.sign_in, method: 'POST' },
  data,
);

export const registration = (data: IRegistrationRequest) => customFetch<IRegistrationResponse, IRegistrationRequest>(
  { path: ApiPath.auth.sign_up, method: 'POST' },
  data,
);

export const checkAuthToken = () => customFetch(
  { path: ApiPath.auth.check_token_valid, method: 'POST' },
);
