import * as React from 'react'
import { FieldWrapper, Input, Select } from 'ui-kit-conf/dist';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';

import clsx from 'clsx';
import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout'
import { IEventCreateRequest } from '../../../../services/events/interfaces';
import { createValidationRulesEventCost } from './utils';
import { CreateEventFormat } from './CreateEventFormat/CreateEventFormat';
import { TICKET_PRICE_VALUES } from './delete';

import cls from './CreateEventCost.module.scss';

export const FREE_TICKET_TYPE = 'Бесплатный';

export interface ICreateEventCost {
  control: Control<IEventCreateRequest, any>;
  errors: FieldErrors<IEventCreateRequest>,
  ticketTypeValue: ISelectOptions;
}

export const CreateEventCost: React.FC<ICreateEventCost> = ({
  control,
  errors,
  ticketTypeValue,
}) => {
  // const validationRules = React.useMemo(() => createValidationRulesEventCost(), []);

  const shouldTicketPriceFieldDisabled = ticketTypeValue.title === FREE_TICKET_TYPE;

  const getTicketPriceFieldWrapperType = () => {
    if (errors.ticketPrice) {
      return 'error';
    } if (ticketTypeValue.title === FREE_TICKET_TYPE) {
      return 'disabled';
    }

    return 'info';

  };

  return (
    <ContentLayout
      title='Стоимость и формат'
    >
      <div className={clsx(cls.costsFields, {
        [cls.withoutPadding]: !!errors.ticketPrice?.message,
      })}>
        <Controller
          name="ticketType"
          control={control}
          render={({ field }) => (
            <FieldWrapper
              type='info'
              label='Тип билета'
            >
              <Select
                // todo: Перевести на бек конфиг фильтров
                options={TICKET_PRICE_VALUES}
                selectedOption={field.value}
                placeholder="Выберите тип билета"
                isInputReadOnly
                onOptionClick={field.onChange}
              />
            </FieldWrapper>
          )}
        />
        <Controller
          name="ticketPrice"
          // rules={!shouldTicketPriceFieldDisabled ? validationRules.ticketPrice : undefined}
          control={control}
          render={({ field }) => (
            <FieldWrapper
              type={getTicketPriceFieldWrapperType()}
              text={errors.ticketPrice?.message}
              label='Цена'
            >
              <Input
                {...field}
                placeholder='0₽'
                isError={!!errors.ticketPrice}
                isDisabled={shouldTicketPriceFieldDisabled}
                onChange={(event) => {
                  let value = event.target.value.replace(/\D/g, '');

                  value = value.replace(/^0+/, '');
                  field.onChange(value);
                }}
              />
            </FieldWrapper>
          )}
        />
      </div>
      <CreateEventFormat control={control} />
    </ContentLayout>
  )
}