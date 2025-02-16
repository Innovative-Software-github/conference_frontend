import { ApiPath } from '../apiPaths';
import { customFetch } from '../customFetch';
import { IEventCreateRequest, IEventsResponse } from './interfaces';

export const getEvents = (queryParams?: Record<string, any>) => customFetch<IEventsResponse[]>(
  {
    path: ApiPath.events.get_events,
    method: 'GET',
  },
  queryParams,
);

export const createEvent = (data: IEventCreateRequest) => customFetch<null, IEventCreateRequest>(
  {
    path: ApiPath.events.event_create,
    method: 'POST',
  },
  data,
);