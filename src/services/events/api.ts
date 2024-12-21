import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch/customFetch';
import { ICreateEventRequest } from './interface';

export const createEvent = () => customFetch<undefined, ICreateEventRequest>(
  { path: ApiPath.events.get_user_events, method: 'GET' },
  undefined,
);
