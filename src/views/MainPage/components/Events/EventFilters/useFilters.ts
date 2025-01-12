import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { IEventFilters } from '@/services/events/interfaces';
import { getEvents } from '@/services/events/request';

export function useFilters() {
  const params = useSearchParams();

  function initLocation(): IEventFilters['location'] {
    return params.getAll('location').map((location) => ({ key: location, value: location }));
  }

  function initTags(): IEventFilters['tags'] {
    return params.getAll('tags');
  }

  function initDate(): IEventFilters['date'] {
    const dateStart = params.get('dateStart');
    const dateFinish = params.get('dateFinish');

    return {
      dateStart: dateStart ? new Date(dateStart) : null,
      dateFinish: dateFinish ? new Date(dateFinish) : null,
    };
  }

  const { control, handleSubmit } = useForm<IEventFilters>({
    defaultValues: {
      location: initLocation(),
      tags: initTags(),
      date: initDate(),
    },
  });

  function buildFiltersUrlParams(eventFilters: IEventFilters, defaultParams?: URLSearchParams): URLSearchParams {
    const params = new URLSearchParams(defaultParams);
    const builders = {
      setLocation: () => {
        params.delete('location');
        eventFilters.location.forEach((loc) => params.append('location', loc.value));

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
