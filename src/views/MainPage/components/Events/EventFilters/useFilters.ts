import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { getEvents } from '@/services/events/request';
import { City, Track } from '@/services/events/interfaces';
import { cities, tracks } from './EventFilters';

export interface IEventDate {
  dateStart: Date | null;
  dateFinish: Date | null;
}

export interface IEventFiltersForm {
  cities: City[];
  tracks: Track[];
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
      .map((cityId) => ({ id: Number(cityId), title: cities.find((city) => city.id == cityId)!.title }));
  }

  function initTracks(): IEventFiltersForm['tracks'] {
    return params
      .getAll('track_ids')
      .map((trackId) => ({ id: Number(trackId), title: tracks.find((track) => track.id == trackId)!.title }));
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
