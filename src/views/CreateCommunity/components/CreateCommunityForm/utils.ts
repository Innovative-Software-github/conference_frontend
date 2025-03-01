export const createValidationRulesCommunityForm = () => ({
  title: {
    required: 'Название события обязательно',
    minLength: { value: 3, message: 'Название должно содержать минимум 3 символа' },
  },
  description: {
    required: 'Описание события обязательно',
    minLength: { value: 10, message: 'Описание должно содержать минимум 10 символов' },
  },
  url: {
    required: 'Ссылка на событие обязательна',
    pattern: {
      value: /^(https?:\/\/)([\da-z\.-]+\.[a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      message: 'Введите корректный URL (начиная с http:// или https://)',
    },
  },
});