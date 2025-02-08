import { ICityFiltersConfig, ITracksFiltersConfig } from '../static/filtersConfig/interfaces';

export interface IEventsResponse {
  id: number;
  title: string;
  city: ICityFiltersConfig[];
  tracks: ITracksFiltersConfig[];
  url: string;
  price: number;
  start_date: string;
  end_date: string;
};
