'use client';

import { Calendar, ComboGroup, MultiSelect } from 'ui-kit-conf/dist';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { SetStateAction, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import cls from './EventFilters.module.scss';
import { IEventDate, IEventFilters } from '../Events';

const cities: ISelectOptions[] = [
  { key: 'Москва', value: 'Москва' },
  { key: 'Санкт-Петербург', value: 'Санкт-Петербург' },
  { key: 'Казань', value: 'Казань' },
  { key: 'Пермь', value: 'Пермь' },
  { key: 'Красноярск', value: 'Красноярск' },
];

const tagOptions = ['AI', 'Инфраструктура', 'Дизайн', 'Backend', 'Frontend', 'Lead'];

interface IEventFiltersProps {
  defaultFilters: IEventFilters;
  onFiltersChange: (filters: IEventFilters) => void;
}

export const EventFilters: React.FC<IEventFiltersProps> = ({ defaultFilters, onFiltersChange }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { control, setValue, handleSubmit } = useForm<IEventFilters>({
    defaultValues: defaultFilters,
  });

  const onSubmit = (eventFilters: IEventFilters) => {
    console.log(eventFilters);
    onFiltersChange(eventFilters);
  };

  return (
    <ContentLayout className={cls.fields}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Controller
            name="date"
            control={control}
            render={({ field: { onChange, value: selectedEventDate } }) => (
              <Calendar
                startDate={selectedEventDate.dateStart}
                endDate={selectedEventDate.dateFinish}
                onChangeEndDate={(endDate) => {
                  console.log(selectedEventDate);
                  setValue('date', { ...selectedEventDate, dateFinish: endDate });
                }}
                onChangeStartDate={(startDate) => setValue('date', { ...selectedEventDate, dateStart: startDate })}
              />
            )}
          />
        </section>
        <ComboGroup isSorted defaultIds={selectedTags} onChange={(tags) => setSelectedTags(tags)}>
          {tagOptions.map((tag) => (
            <ComboGroup.Checkbox key={tag} id={tag}>
              {tag}
            </ComboGroup.Checkbox>
          ))}
        </ComboGroup>
        <input type="submit" />
      </form>
    </ContentLayout>
  );
};
