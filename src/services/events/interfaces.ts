import { ICityFiltersConfig, ITracksFiltersConfig } from '../static/filtersConfig/interfaces';

export interface IAuthor {
  id: number;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
}

export interface IAuthorCommunity {
  id: number;
  picture: string;
  description: string;
  url: string;
  owner: {
    id: number;
    username: string | null;
    first_name: string | null;
    last_name: string | null;
  }
}

export interface IPictures {
  id: number;
  picture_name: string;
}

export interface IEventsResponse {
  id: number;
  title: string | null;
  description: string | null;
  url: string | null;
  price: number | null;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  city: ICityFiltersConfig | null;
  author_is_community: boolean;
  pictures: IPictures[];
  tracks: ITracksFiltersConfig[];
  is_draft: boolean;
  ticket_type: number | null;
  author: IAuthor | null;
  author_community: IAuthorCommunity | null;
  // Забыть
  formats: any;
};

export interface IEventCreateRequest extends Omit<IEventsResponse, 'id'> {
  community_author_id: number | null;
};
