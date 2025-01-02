export interface IEventsResponse {
  id: number;
  imgLink?: string;
  title: string;
  tags?: string[];
  location: string;
  dateStart: number;
  dateFinish: number;
}