import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';

const validateTime = (value: string): boolean => {
  if (!value) return false;
  const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

  return timeRegex.test(value);
};

export const createValidationRulesEventLocation = () => ({
  cities: {
    validate: {
      required: (value: ISelectOptions) =>
        value && value.id && String(value.id).trim() !== ''
          ? true
          : 'Выберите город',
    },
  },
  address: {
    required: 'Введите адрес',
  },
  startDate: {
    required: 'Введите дату начала',
  },
  endDate: {
    required: 'Введите дату окончания',
  },
  startTime: {
    required: 'Введите время начала',
    validate: {
      isValid: (value: string) =>
        validateTime(value) || 'Введите корректное время в формате ЧЧ:ММ (00:00 - 23:59)',
    },
  },
  endTime: {
    required: 'Введите время окончания',
    validate: {
      isValid: (value: string) =>
        validateTime(value) || 'Введите корректное время в формате ЧЧ:ММ (00:00 - 23:59)',
    },
  },
});
