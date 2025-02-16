import * as React from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { FieldWrapper, Input, Select } from 'ui-kit-conf/dist'

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout'
import { IEventCreateRequest } from '../../../../services/events/interfaces';
import { ICityFiltersConfig } from '../../../../services/static/filtersConfig/interfaces';

import cls from './CreateEventLocation.module.scss';
import { normalizeDate, normalizeTime } from '../../../../utils/normilizers';
import { createValidationRulesEventLocation } from './utils';

export interface ICreateEventLocation {
  citiesFilterConfig: ICityFiltersConfig[];
  control: Control<IEventCreateRequest, any>;
  errors: FieldErrors<IEventCreateRequest>;
}

export const CreateEventLocation: React.FC<ICreateEventLocation> = ({
  citiesFilterConfig,
  control,
  errors,
}) => {
  const validationRules = React.useMemo(() => createValidationRulesEventLocation(), []);

  return (
    <ContentLayout className={cls.container}>
      <Controller
        name="cities"
        rules={validationRules.cities}
        control={control}
        render={({ field }) => (
          <FieldWrapper
            label='Город проведения'
            type={errors.cities ? 'error' : 'info'}
            text={errors.cities?.message}
          >
            <Select
              isError={!!errors.cities}
              options={citiesFilterConfig}
              selectedOption={field.value}
              placeholder='Введите город'
              onOptionClick={field.onChange}
            />
          </FieldWrapper>
        )}
      />
      <Controller
        name="address"
        rules={validationRules.address}
        control={control}
        render={({ field }) => (
          <FieldWrapper
            label='Адрес проведения'
            type={errors.address ? 'error' : 'info'}
            text={errors.address?.message}
          >
            <Input
              {...field}
              isError={!!errors.address}
              placeholder='Введите адрес проведения'
            />
          </FieldWrapper>
        )}
      />
      <div className={cls.splitBlock}>
        <Controller
          name="startDate"
          rules={validationRules.startDate}
          control={control}
          render={({ field }) => (
            <FieldWrapper
              label='Дата начала'
              type={errors.startDate ? 'error' : 'info'}
              text={errors.startDate?.message}
            >
              <Input
                {...field}
                isError={!!errors.startDate}
                placeholder='дд/мм/гггг'
                onChange={(event) => field.onChange(normalizeDate(event.target.value))}
              />
            </FieldWrapper>
          )}
        />
        <Controller
          name="endDate"
          rules={validationRules.endDate}
          control={control}
          render={({ field }) => (
            <FieldWrapper
              label='Дата конца'
              type={errors.endDate ? 'error' : 'info'}
              text={errors.endDate?.message}
            >
              <Input
                {...field}
                isError={!!errors.endDate}
                placeholder='дд/мм/гггг'
                onChange={(event) => field.onChange(normalizeDate(event.target.value))}

              />
            </FieldWrapper>
          )}
        />
      </div>

      <div className={cls.splitBlock}>
        <Controller
          name="startTime"
          rules={validationRules.startTime}
          control={control}
          render={({ field }) => (
            <FieldWrapper
              label='Время начала'
              type={errors.startTime ? 'error' : 'info'}
              text={errors.startTime?.message}
            >
              <Input
                {...field}
                isError={!!errors.startTime}
                placeholder='Введите время начала по мск'
                onChange={(event) => field.onChange(normalizeTime(event.target.value))}
              />
            </FieldWrapper>
          )}
        />
        <Controller
          name="endTime"
          rules={validationRules.endTime}
          control={control}
          render={({ field }) => (
            <FieldWrapper
              label='Время конца'
              type={errors.endTime ? 'error' : 'info'}
              text={errors.endTime?.message}
            >
              <Input
                {...field}
                isError={!!errors.endTime}
                placeholder='Введите время конца по мск'
                onChange={(event) => field.onChange(normalizeTime(event.target.value))}

              />
            </FieldWrapper>
          )}
        />
      </div>
    </ContentLayout>
  )
}