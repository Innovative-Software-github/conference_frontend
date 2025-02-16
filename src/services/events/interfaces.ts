import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { ICityFiltersConfig, ITracksFiltersConfig } from '../static/filtersConfig/interfaces';

export interface IEventsResponse {
  id: number;
  title: string;
  city: ICityFiltersConfig;
  tracks: ITracksFiltersConfig[];
  url: string;
  price: number;
  start_date: string;
  end_date: string;
};

export interface IEventCreateRequest {
  coverImages: File[],
  selectedTracks: string[],
  name: string,
  description: string,
  cities: ISelectOptions,
  address: string,
  startDate: string,
  endDate: string,
  startTime: string,
  endTime: string,
  ticketType: ISelectOptions,
  ticketPrice: string,
  online: boolean,
  offline: boolean,
};
