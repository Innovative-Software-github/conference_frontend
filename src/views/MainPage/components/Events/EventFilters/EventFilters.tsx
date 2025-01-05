'use client';

import { Calendar, ComboGroup, MultiSelect } from 'ui-kit-conf/dist';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import { useState } from 'react';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import cls from './EventFilters.module.scss';

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
  const [selectedCities, setSelectedCities] = useState<ISelectOptions[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState<IEventDate>();

  return (
    <ContentLayout className={cls.fields}>
      <section className={cls.mainFields}>
        <MultiSelect
          placeholder="Выберите города..."
          options={cities}
          selectedOptions={selectedCities}
          onOptionClick={(cities) => setSelectedCities(cities)}
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
    </ContentLayout>
  );
};
