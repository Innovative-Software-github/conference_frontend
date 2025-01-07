import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';

export interface IEventsResponse {
  id: number;
  href: string;
  imgLink?: string;
  title: string;
  tags?: string[];
  location: string;
  dateStart: number;
  dateFinish: number;
}

export interface IEventDate {
  dateStart: Date | null;
  dateFinish: Date | null;
}

export interface IEventFilters {
  location: ISelectOptions[];
  tags: string[];
  date: IEventDate;
}
