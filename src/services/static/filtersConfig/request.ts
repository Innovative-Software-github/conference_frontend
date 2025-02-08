import { ApiPath } from '../../apiPaths';
import { customFetch } from '../../customFetch';
import {
  ICitiesFiltersConfigResponse,
  IFormatsFiltersConfigResponse,
  ITracksFiltersConfigResponse,
} from './interfaces';


export const getCityFilters = () => customFetch<ICitiesFiltersConfigResponse>(
  {
    path: ApiPath.filtersData.cities,
    method: 'GET',
    fetchConfig: {
      cache: 'force-cache',
    },
  },
);

export const getTracksFilters = () => customFetch<ITracksFiltersConfigResponse>(
  {
    path: ApiPath.filtersData.tracks,
    method: 'GET',
    fetchConfig: {
      cache: 'force-cache',
    },
  },
);

export const getFormatsFilters = () => customFetch<IFormatsFiltersConfigResponse>(
  {
    path: ApiPath.filtersData.formats,
    method: 'GET',
    fetchConfig: {
      cache: 'force-cache',
    },
  },
);

export const getCommunityFilters = () => customFetch<any>(
  {
    path: ApiPath.filtersData.community,
    method: 'GET',
    fetchConfig: {
      cache: 'force-cache',
    },
  },
);
