import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';
import { IPostCommunityPictureResponse } from './interfaces';

export const postEventPicture = (file: File) => customFetch<string, File>(
  {
    path: ApiPath.pictures.event,
    method: 'POST',
  },
  file,
);

export const postCommunityPicture = (file: FormData) => customFetch<IPostCommunityPictureResponse, FormData>(
  {
    path: ApiPath.pictures.community,
    method: 'POST',
  },
  file,
);