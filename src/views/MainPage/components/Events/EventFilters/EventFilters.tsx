'use client';

import { Input, MultiSelect } from 'ui-kit-conf/dist';
import { Controller } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import cls from './EventFilters.module.scss';
import { City, IEventsResponse } from '@/services/events/interfaces';
import { IEventFiltersForm, IEventFiltersParams, useFilters } from './useFilters';
import { buildUrlParams } from '../buildUrlParams';

// TODO: с сервера
export const cities: City[] = [
  { id: 1, title: 'Москва' },
  { id: 2, title: 'Санкт-Петербург' },
  { id: 3, title: 'Казань' },
  { id: 4, title: 'Пермь' },
  { id: 5, title: 'Красноярск' },
];

export const tracks = [
  { id: 1, title: 'Backend' },
  { id: 2, title: 'AI' },
  { id: 3, title: 'Frontend' },
  { id: 4, title: 'DevOps' },
  { id: 5, title: 'Lead' },
];

interface IEventFiltersProps {
  onFiltersApplied: (events: IEventsResponse[]) => void;
}

export const EventFilters: React.FC<IEventFiltersProps> = ({ onFiltersApplied }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { control, handleSubmit, applyFilters } = useFilters();

  async function onSubmit({ cities, tracks, date }: IEventFiltersForm) {
    try {
      const eventFiltersParams: IEventFiltersParams = {
        city_ids: cities.map((city) => `${city.key}`),
        track_ids: tracks.map((track) => `${track.key}`),
        start_date: date.dateStart?.toISOString(),
        end_date: date.dateFinish?.toISOString(),
      };
      const filtersUrlParams = buildUrlParams(eventFiltersParams);
      const events = await applyFilters(filtersUrlParams);

      onFiltersApplied(events);
      router.push(`${pathName}?${filtersUrlParams.toString()}`);
    } catch (e) {
      console.log('error handling logic');
    }
  }

  // TODO: selectedOptions, onOptionClick - массив из id
  // TODO: поменять тип в Select на {id, value}
  // TODO: поменять key -> id, id - тип number
  return (
    <ContentLayout>
      <form className={cls.fields} onSubmit={handleSubmit(onSubmit)}>
        <section className={cls.mainFields}>
          <Controller
            name="cities"
            control={control}
            render={({ field: { onChange, value: selectedLocations } }) => (
              <MultiSelect
                placeholder="Выберите города..."
                options={cities.map((city) => ({ key: `${city.id}`, value: city.title }))}
                selectedOptions={selectedLocations}
                onOptionClick={(cities) => onChange(cities)}
              />
            )}
          />

          {/* <Controller  Ошибки из-за onChange в консоли с Suspense
            name="date"
            control={control}
            render={({ field: { onChange, value: selectedEventDate } }) => (
              <Calendar
                startDate={selectedEventDate.dateStart}
                endDate={selectedEventDate.dateFinish}
                onChangeEndDate={(endDate) => {
                  console.log(selectedEventDate);
                  onChange({ ...selectedEventDate, dateFinish: endDate } as IEventDate);
                }}
                onChangeStartDate={(startDate) => ({ ...selectedEventDate, dateStart: startDate }) as IEventDate}
              />
            )}
          /> */}
        </section>
        {/* <ComboGroup isSorted defaultIds={selectedTags} onChange={(tags) => setSelectedTags(tags)}>
          {tagOptions.map((tag) => (
            <ComboGroup.Checkbox key={tag} id={tag}>
              {tag}
            </ComboGroup.Checkbox>
          ))}
        </ComboGroup> */}
        <Input value="Применить" type="submit" />
      </form>
    </ContentLayout>
  );
};
