import { IEventFilters } from '../interfaces';

export class FiltersUrlParamsBuilder {
  private filtersUrlParams = new URLSearchParams();

  private build(): URLSearchParams {
    return this.filtersUrlParams;
  }

  private addLocation(location: IEventFilters['location']): FiltersUrlParamsBuilder {
    if (!location) return this;
    console.log('location arr', location);
    location.forEach((loc) => this.filtersUrlParams.append('location', loc.value));

    return this;
  }

  builder(filters: IEventFilters): URLSearchParams {
    return this.addLocation(filters.location).build();
  }
}
