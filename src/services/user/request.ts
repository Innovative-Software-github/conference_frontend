import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';
import { ICurrentUserResponse } from './interfaces';

export const getUser = () => customFetch<ICurrentUserResponse>(
  {
    path: ApiPath.auth.auth_current,
    method: 'GET',
  },
);
