import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';
import { IEventsResponse } from './interfaces';

export const getEvents = (queryParams?: Record<string, any>) => customFetch<IEventsResponse[]>(
  {
    path: ApiPath.events.get_events,
    method: 'GET',
  },
  queryParams,
);
