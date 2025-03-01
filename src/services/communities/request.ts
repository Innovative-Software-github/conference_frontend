import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';
import { ICommunityCreateRequest } from './interfaces';

export const createCommunity = (data: ICommunityCreateRequest) => customFetch<string, ICommunityCreateRequest>(
  {
    path: ApiPath.community.community_create,
    method: 'POST',
  },
  data,
);