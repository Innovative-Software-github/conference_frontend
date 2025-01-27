import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { getEvents } from '@/services/events/request';
import { cities, tracks } from './EventFilters';

export interface IEventDate {
  dateStart: Date | null;
  dateFinish: Date | null;
}

export interface IEventFiltersForm {
  cities: ISelectOptions[];
  tracks: ISelectOptions[];
  date: IEventDate;
}

export interface IEventFiltersParams extends Record<string, string | string[] | undefined> {
  city_ids?: string | string[];
  track_ids?: string | string[];
  start_date?: string;
  end_date?: string;
}

export function useFilters() {
  const params = useSearchParams();

  // TODO: ui компонент должен отдавать только ids, потом убрать title
  function initCities(): IEventFiltersForm['cities'] {
    return params
      .getAll('city_ids')
      .map((cityId) => ({ key: cityId, value: cities.find((city) => city.id === Number(cityId))?.title ?? '' }));
  }

  function initTracks(): IEventFiltersForm['tracks'] {
    return params.getAll('track_ids').map((trackId) => ({
      key: trackId,
      value: tracks.find((track) => track.id === Number(trackId))?.title ?? '',
    }));
  }
  //

  function initDate(): IEventFiltersForm['date'] {
    const dateStart = params.get('start_date');
    const dateFinish = params.get('end_date');

    return {
      dateStart: dateStart ? new Date(dateStart) : null,
      dateFinish: dateFinish ? new Date(dateFinish) : null,
    };
  }

  const { control, handleSubmit } = useForm<IEventFiltersForm>({
    defaultValues: {
      cities: initCities(),
      tracks: initTracks(),
      date: initDate(),
    },
  });

  const applyFilters = async (filtersUrlParams: URLSearchParams) => {
    const events = await getEvents(filtersUrlParams);

    return events;
  };

  return { control, handleSubmit, applyFilters };
}
