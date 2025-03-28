import { IFiltersConfig } from './interfaces';
import { getCityFilters, getTracksFilters, getFormatsFilters, getCommunityFilters } from './request';

export async function fetchFiltersConfig(): Promise<IFiltersConfig> {
  const cities = await getCityFilters();
  const tracks = await getTracksFilters();
  const formats = await getFormatsFilters();
  const community = await getCommunityFilters();

  return {
    citiesFilterConfig: cities.data.cities || [{}],
    tracksFilterConfig: tracks.data.tracks || [{}],
    formatsFilterConfig: formats.data.formats || [{}],
    communityFilterConfig: community.data.community || [{}],
  };
}
