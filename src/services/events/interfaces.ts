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