const RE_DIGIT = /[^\d]/g;

const getStripper = (regexp: RegExp, replacer = '') => (
  value: string | undefined,
): string => value ? value.replace(regexp, replacer) : '';

export const stripNotNumbers = getStripper(RE_DIGIT);

export const normalizeDate = (value: string) => {
  if (!value) {
    return value;
  }

  const onlyNumbers = stripNotNumbers(value);

  let dayStr = onlyNumbers.slice(0, 2);
  let monthStr = onlyNumbers.slice(2, 4);
  let yearStr = onlyNumbers.slice(4, 8);


  if (dayStr.length === 2) {
    let dayNum = parseInt(dayStr, 10);

    if (dayNum === 0) {
      dayNum = 1;
    } else if (dayNum > 31) {
      dayNum = 31;
    }
    dayStr = dayNum.toString().padStart(2, '0');
  }

  if (monthStr.length === 2) {
    let monthNum = parseInt(monthStr, 10);

    if (monthNum === 0) {
      monthNum = 1;
    } else if (monthNum > 12) {
      monthNum = 12;
    }
    monthStr = monthNum.toString().padStart(2, '0');
  }

  if (yearStr.length === 4) {
    let yearNum = parseInt(yearStr, 10);

    if (yearNum < 2000) {
      yearNum = 2000;
    } else if (yearNum > 2050) {
      yearNum = 2050;
    }
    yearStr = yearNum.toString();
  }

  return [dayStr, monthStr, yearStr].filter((e) => e).join('.');
};

export const normalizeTime = (value: string) => {
  if (!value) {
    return value;
  }

  const onlyNumbers = stripNotNumbers(value);

  const hourtStr = onlyNumbers.slice(0, 2);
  const minutesStr = onlyNumbers.slice(2, 4);

  return [hourtStr, minutesStr].filter(e => e).join(':');
}
