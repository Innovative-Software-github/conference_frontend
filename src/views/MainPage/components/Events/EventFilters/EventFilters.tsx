'use client';

import { Input, MultiSelect } from 'ui-kit-conf/dist';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { Controller } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import cls from './EventFilters.module.scss';
import { IEventsResponse } from '@/services/events/interfaces';
import { IEventFiltersForm, IEventFiltersParams, useFilters } from './useFilters';

const cities: ISelectOptions[] = [
  { key: 'Москва', value: 'Москва' },
  { key: 'Санкт-Петербург', value: 'Санкт-Петербург' },
  { key: 'Казань', value: 'Казань' },
  { key: 'Пермь', value: 'Пермь' },
  { key: 'Красноярск', value: 'Красноярск' },
];

// const tagOptions = ['AI', 'Инфраструктура', 'Дизайн', 'Backend', 'Frontend', 'Lead'];

interface IEventFiltersProps {
  onFiltersApplied: (events: IEventsResponse[]) => void;
}

export const EventFilters: React.FC<IEventFiltersProps> = ({ onFiltersApplied }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { control, handleSubmit, applyFilters, buildFiltersUrlParams } = useFilters();

  async function onSubmit({ location, tags, date }: IEventFiltersForm) {
    try {
      const eventFiltersParams: IEventFiltersParams = {
        location: location.map((loc) => loc.value),
        tags,
        dateStart: date.dateStart?.toISOString() ?? null,
        dateFinish: date.dateFinish?.toISOString() ?? null,
      };
      const filtersUrlParams = buildFiltersUrlParams(eventFiltersParams);
      const events = await applyFilters(filtersUrlParams);

      onFiltersApplied(events);
      router.push(`${pathName}?${filtersUrlParams.toString()}`);
    } catch (e) {
      console.log('error handling logic');
    }
  }

  return (
    <ContentLayout>
      <form className={cls.fields} onSubmit={handleSubmit(onSubmit)}>
        <section className={cls.mainFields}>
          <Controller
            name="location"
            control={control}
            render={({ field: { onChange, value: selectedLocations } }) => (
              <MultiSelect
                placeholder="Выберите города..."
                options={cities}
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
