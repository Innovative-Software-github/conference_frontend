interface IEventEntity {
  id: number;
  title: string;
}

export type City = IEventEntity;
export type Track = IEventEntity;

export interface IEventsResponse {
  id: number;
  title: string;
  city: City;
  tracks: Track[];
  url: string;
  price: number;
  start_date: string;
  end_date: string;
}
