export const createValidationRulesEventDescription = () => ({
  name: {
    required: 'Название события обязательно',
    minLength: { value: 3, message: 'Название должно содержать минимум 3 символа' },
  },
  description: {
    required: 'Описание события обязательно',
    minLength: { value: 10, message: 'Описание должно содержать минимум 10 символов' },
  },
});