// Cities start
export interface ICityFiltersConfig {
  id: number;
  title: string;
}

export interface ICitiesFiltersConfigResponse {
  cities: ICityFiltersConfig[]
}
//

// Tracks start
export interface ITracksFiltersConfig {
  id: number;
  title: string;
}

export interface ITracksFiltersConfigResponse {
  tracks: ITracksFiltersConfig[]
}
//

// Formats start
export type TFormatsStatuses = 'Online' | 'Offline' | 'All';

export interface IFormatsFiltersConfig {
  id: number;
  title: TFormatsStatuses;
}

export interface IFormatsFiltersConfigResponse {
  formats: IFormatsFiltersConfig[];
}
//

// Community start
export interface ICommunityFiltersConfig {
  id: number;
  title: TFormatsStatuses;
}

export interface ICommunityConfigResponse { }
//

export interface IFiltersConfig {
  citiesFilterConfig: ICityFiltersConfig[];
  tracksFilterConfig: ITracksFiltersConfig[];
  formatsFilterConfig: IFormatsFiltersConfig[];
  communityFilterConfig: any;
};
