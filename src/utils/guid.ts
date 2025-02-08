function s4(): string {
  // eslint-disable-next-line no-bitwise
  return (((Math.random() + 1) * 0x10000) | 0).toString(16).substring(1);
}

/**
  Генерация случайного ключа
 */
export function guid(): string {
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}
