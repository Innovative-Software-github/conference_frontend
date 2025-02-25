import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DateTimeFormat } from '../constants/Dates';

export function formatDateTime(
  dateTime: Date,
  outputPattern: DateTimeFormat,
) {
  return format(dateTime, outputPattern, {
    locale: ru,
  });
}