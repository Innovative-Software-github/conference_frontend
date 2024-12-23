import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch/customFetch';

export const checkAuthToken = () => customFetch(
  { path: ApiPath.auth.check_token_valid, method: 'POST', isProtected: true },
);
