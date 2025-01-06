'use client';

import { Calendar, ComboGroup, MultiSelect } from 'ui-kit-conf/dist';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import cls from './EventFilters.module.scss';
import { IEventFilters } from '../Events';

const cities: ISelectOptions[] = [
  { key: 'Москва', value: 'Москва' },
  { key: 'Санкт-Петербург', value: 'Санкт-Петербург' },
  { key: 'Казань', value: 'Казань' },
  { key: 'Пермь', value: 'Пермь' },
  { key: 'Красноярск', value: 'Красноярск' },
];

const tagOptions = ['AI', 'Инфраструктура', 'Дизайн', 'Backend', 'Frontend', 'Lead'];

interface IEventDate {
  startDate: Date | null;
  endDate: Date | null;
}

export const EventFilters = () => {
  // const [selectedCities, setSelectedCities] = useState<ISelectOptions[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState<IEventDate>();

  const { control, setValue, handleSubmit } = useForm<IEventFilters>({
    defaultValues: {
      location: [],
      tags: [],
      dateStart: null,
      dateFinish: null,
    },
  });

  const onSubmit = (eventFilters: IEventFilters) => console.log(eventFilters);

  return (
    <ContentLayout className={cls.fields}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={cls.mainFields}>
          <Controller
            name="location"
            control={control}
            render={({ field: { onChange, value } }) => (
              <MultiSelect
                placeholder="Выберите города..."
                options={cities}
                selectedOptions={value}
                onOptionClick={(cities) => onChange(cities)}
              />
            )}
          />
          <Calendar
            startDate={eventDate?.startDate ?? null}
            endDate={eventDate?.endDate ?? null}
            onChangeEndDate={(endDate) =>
              setEventDate((prev) => ({ ...(prev ?? { endDate: null, startDate: null }), endDate }))
            }
            onChangeStartDate={(startDate) =>
              setEventDate((prev) => ({ ...(prev ?? { endDate: null, startDate: null }), startDate }))
            }
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
