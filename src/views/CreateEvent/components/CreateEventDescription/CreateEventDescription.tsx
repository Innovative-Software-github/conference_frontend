'use client'

import * as React from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { FieldWrapper, Input, Textarea } from 'ui-kit-conf/dist';

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';
import { IEventCreateRequest } from '../../../../services/events/interfaces';
import { createValidationRulesEventDescription } from './utils';

import cls from './CreateEventDescription.module.scss';

export interface ICreateEventDescription {
  control: Control<IEventCreateRequest, any>;
  errors: FieldErrors<IEventCreateRequest>;
}

export const CreateEventDescription: React.FC<ICreateEventDescription> = ({
  control,
  errors,
}) => {
  const validationRules = React.useMemo(() => createValidationRulesEventDescription(), []);

  return (
    <ContentLayout
      title='Описание события'
    >
      <Controller
        name="name"
        control={control}
        rules={validationRules.name}
        render={({ field }) => (
          <FieldWrapper
            className={cls.fieldWrapper}
            label='Название события'
            type={errors.name ? 'error' : 'info'}
            text={errors.name?.message}
          >
            <Input
              {...field}
              isError={!!errors.name}
              placeholder='Введите название'
            />
          </FieldWrapper>
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={validationRules.description}
        render={({ field }) => (
          <FieldWrapper
            label='Описание события'
            type={errors.description ? 'error' : 'info'}
            text={errors.description?.message}
            className={cls.fieldWrapper}
          >
            <Textarea
              {...field}
              className={cls.description}
              isError={!!errors.description}
              placeholder='Введите описание'
            />
          </FieldWrapper>
        )}
      />
    </ContentLayout>
  )
}