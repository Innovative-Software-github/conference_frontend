import { ICommunityCreateRequest } from '../../services/communities/interfaces';

export const defaultCreateCommunityValues: ICommunityCreateRequest = {
  title: '',
  picture_id: null,
  description: '',
  url: '',
} as const