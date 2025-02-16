import * as React from 'react'
import { Checkbox, FieldWrapper } from 'ui-kit-conf/dist'
import { Control, Controller } from 'react-hook-form';

import { IEventCreateRequest } from '../../../../../services/events/interfaces';

import cls from './CreateEventFormat.module.scss';

export interface ICreateEventFormat {
  control: Control<IEventCreateRequest, any>
}

export const CreateEventFormat: React.FC<ICreateEventFormat> = ({
  control,
}) => (
  <FieldWrapper
    type="info"
    label="Формат"
  >
    <div className={cls.container}>
      <Controller
        name="online"
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            label='Онлайн'
            checked={field.value}
          />
        )}
      />
      <Controller
        name="offline"
        control={control}
        render={({ field }) => (
          <Checkbox
            {...field}
            label='Офлайн'
            checked={field.value}
          />
        )}
      />
    </div>
  </FieldWrapper>
)