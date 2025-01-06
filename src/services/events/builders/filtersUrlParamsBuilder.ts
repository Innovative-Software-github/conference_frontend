import { IEventFilters } from '@/views/MainPage/components/Events/Events';

export class FiltersUrlParamsBuilder {
  private filtersUrlParams = new URLSearchParams();

  private addLocation(location: IEventFilters['location']): URLSearchParams {
    if (!location) return this.filtersUrlParams;
    console.log('location arr', location);
    location.forEach((loc) => this.filtersUrlParams.append('location', loc.value));

    return this.filtersUrlParams;
  }

  builder(filters: IEventFilters): URLSearchParams {
    return this.addLocation(filters.location);
  }
}
