import * as React from 'react'
import { FieldWrapper, Input, Textarea } from 'ui-kit-conf/dist';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout';
import { ICommunityCreateRequest } from '../../../../services/communities/interfaces';
import { createValidationRulesCommunityForm } from './utils';

import cls from './CreateCommunityForm.module.scss';

export interface ICreateCommunityForm {
  control: Control<ICommunityCreateRequest, any>;
  errors: FieldErrors<ICommunityCreateRequest>;
}

export const CreateCommunityForm: React.FC<ICreateCommunityForm> = ({
  control,
  errors,
}) => {
  const validationRules = React.useMemo(() => createValidationRulesCommunityForm(), []);

  return (
    <ContentLayout
      title='Описание сообщества'
    >
      <Controller
        name="title"
        rules={validationRules.title}
        control={control}
        render={({ field }) => (
          <FieldWrapper
            className={cls.fieldWrapper}
            label='Название сообщества'
            type={errors.title?.message ? 'error' : 'info'}
            text={errors.title?.message}
          >
            <Input
              {...field}
              isError={!!errors.title?.message}
              placeholder='Введите название сообщества'
            />
          </FieldWrapper>
        )} />

      <Controller
        name="url"
        rules={validationRules.url}
        control={control}
        render={({ field }) => (
          <FieldWrapper
            className={cls.fieldWrapper}
            label='Ссылка на сайт'
            type={errors.url?.message ? 'error' : 'info'}
            text={errors.url?.message}
          >
            <Input
              {...field}
              isError={!!errors.url?.message}
              placeholder='Введите cсылку на сайт'
            />
          </FieldWrapper>
        )} />

      <Controller
        name="description"
        rules={validationRules.description}
        control={control}
        render={({ field }) => (
          <FieldWrapper
            className={cls.fieldWrapper}
            label='Описание'
            type={errors.description?.message ? 'error' : 'info'}
            text={errors.description?.message}
          >
            <Textarea
              {...field}
              isError={!!errors.description?.message}
              placeholder='Введите описание'
            />
          </FieldWrapper>
        )} />
    </ContentLayout>
  )
}
