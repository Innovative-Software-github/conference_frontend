'use client';

import { Calendar, ComboGroup, Input, MultiSelect } from 'ui-kit-conf/dist';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import cls from './EventFilters.module.scss';
import { IEventFilters, IEventDate } from '@/services/events/interfaces';

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

  const { control, handleSubmit } = useForm<IEventFilters>({
    defaultValues: defaultFilters,
  });

  const onSubmit = (eventFilters: IEventFilters) => {
    console.log(eventFilters);
    onFiltersChange(eventFilters);
  };

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
          <Controller
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
          />
        </section>
        <ComboGroup isSorted defaultIds={selectedTags} onChange={(tags) => setSelectedTags(tags)}>
          {tagOptions.map((tag) => (
            <ComboGroup.Checkbox key={tag} id={tag}>
              {tag}
            </ComboGroup.Checkbox>
          ))}
        </ComboGroup>
        <Input value="Применить" type="submit" />
      </form>
    </ContentLayout>
  );
};
