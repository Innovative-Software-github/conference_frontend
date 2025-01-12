import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { getEvents } from '@/services/events/request';

export interface IEventDate {
  dateStart: Date | null;
  dateFinish: Date | null;
}

export interface IEventFiltersForm {
  location: ISelectOptions[];
  tags: string[];
  date: IEventDate;
}

export interface IEventFiltersParams {
  location: string[];
  tags: string[];
  dateStart: string | null;
  dateFinish: string | null;
}

export function useFilters() {
  const params = useSearchParams();

  function initLocation(): IEventFiltersForm['location'] {
    return params.getAll('location').map((location) => ({ key: location, value: location }));
  }

  function initTags(): IEventFiltersForm['tags'] {
    return params.getAll('tags');
  }

  function initDate(): IEventFiltersForm['date'] {
    const dateStart = params.get('dateStart');
    const dateFinish = params.get('dateFinish');

    return {
      dateStart: dateStart ? new Date(dateStart) : null,
      dateFinish: dateFinish ? new Date(dateFinish) : null,
    };
  }

  const { control, handleSubmit } = useForm<IEventFiltersForm>({
    defaultValues: {
      location: initLocation(),
      tags: initTags(),
      date: initDate(),
    },
  });

  // теперь у нас только массив или строка. сделать общее решение просто
  function buildFiltersUrlParams(
    eventFiltersParams: IEventFiltersParams,
    defaultParams?: URLSearchParams,
  ): URLSearchParams {
    const params = new URLSearchParams(defaultParams);
    const builders = {
      setLocation: () => {
        params.delete('location');
        eventFiltersParams.location.forEach((loc) => params.append('location', loc));

        return builders;
      },
      getParams: () => params,
    };

    return builders.setLocation().getParams();
  }

  const applyFilters = async (filtersUrlParams: URLSearchParams) => {
    const events = await getEvents(filtersUrlParams);

    return events;
  };

  return { control, handleSubmit, applyFilters, buildFiltersUrlParams };
}
