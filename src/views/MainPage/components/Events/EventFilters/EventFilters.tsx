'use client';

import { Button, Calendar, Checkbox, ComboGroup, FieldWrapper, Input, MultiSelect } from 'ui-kit-conf/dist';

import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';
import { IFiltersConfig } from '../../../../../services/static/filtersConfig/interfaces';
import { useEventFilters } from '../utils';
import { IEventsResponse } from '../../../../../services/events/interfaces';
import { getEvents } from '../../../../../services/events/request';

import cls from './EventFilters.module.scss';

export interface IEventFiltersProps {
  filtersConfig: IFiltersConfig;
  isLoadingEvents: boolean;
  onChangeLoadingEvents: (value: boolean) => void;
  onFiltersChange: (events: IEventsResponse[]) => void;
}

export const EventFilters: React.FC<IEventFiltersProps> = ({
  filtersConfig,
  isLoadingEvents,
  onChangeLoadingEvents,
  onFiltersChange,
}) => {
  const {
    citiesFilterConfig,
    tracksFilterConfig,
    formatsFilterConfig,
  } = filtersConfig

  const {
    filters,
    updateFilterValue,
    updateFilterArray,
    applyFilters,
  } = useEventFilters();

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      onChangeLoadingEvents(true);
      const events = await getEvents(filters);

      onFiltersChange(events.data);
      applyFilters();
    } catch (error) {
      // todo: выводить нотификацию
      console.error(error);
    }
    finally {
      onChangeLoadingEvents(false);
    }
  }

  return (
    <ContentLayout>
      <form className={cls.container} onSubmit={(e) => handleSumbit(e)}>
        <section className={cls.section}>
          <FieldWrapper type='info' label='Город'>
            <MultiSelect
              placeholder='Выберите города...'
              options={citiesFilterConfig}
              selectedOptions={filters.city_ids}
              // todo, порешать с типизацией
              onOptionClick={(optionIds) => updateFilterArray('city_ids', optionIds as string[])}
            />
          </FieldWrapper>

          <FieldWrapper type='info' label='Дата'>
            {/* todo: переделать Calendar на input */}
            <Calendar
              startDate={
                filters.start_date
                  ? new Date(filters.start_date)
                  : null
              }
              endDate={
                filters.end_date
                  ? new Date(filters.end_date)
                  : null
              }

              onChangeStartDate={(date) => {
                updateFilterValue('start_date', date?.toISOString().split('T')[0] || '');
              }}
              onChangeEndDate={(date) => {
                updateFilterValue('end_date', date?.toISOString().split('T')[0] || '');
              }}
            />
          </FieldWrapper>

          <FieldWrapper type='info' label='Цена билета'>
            <Input
              value={filters.max_price}
              placeholder='До какой суммы искать? :->'
              onChange={(event) => {
                let value = event.target.value.replace(/\D/g, '');

                value = value.replace(/^0+/, '');
                updateFilterValue('max_price', value);
              }}

            />
          </FieldWrapper>
        </section>
        <section className={cls.section}>
          <FieldWrapper type='info' label='Выберите направление'>
            <ComboGroup
              isSorted
              defaultIds={filters.track_ids}
              onChange={(selectedIds) => updateFilterArray('track_ids', selectedIds)}
            >
              {tracksFilterConfig.map((track) => (
                <ComboGroup.Checkbox
                  key={track.title}
                  id={String(track.id)}
                >
                  {track.title}
                </ComboGroup.Checkbox>
              ))}
            </ComboGroup>
          </FieldWrapper>
        </section>
        <section className={cls.section}>
          <FieldWrapper type='info' label='Формат'>
            <div className={cls.checkboxContainer}>
              {formatsFilterConfig.map((format) => (
                <Checkbox
                  key={format.title}
                  label={format.title}
                  checked
                />
              ))}
            </div>
          </FieldWrapper>
        </section>
        <Button
          type="submit"
          variant='default'
          isLoading={isLoadingEvents}
        >
          Применить
        </Button>
      </form>
    </ContentLayout>
  );
};
