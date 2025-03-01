import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';

export const postEventPicture = (file: File) => customFetch<string, File>(
  {
    path: ApiPath.pictures.event,
    method: 'POST',
  },
  file,
);

export const postCommunityPicture = (file: File) => customFetch<string, File>(
  {
    path: ApiPath.pictures.community,
    method: 'POST',
  },
  file,
);