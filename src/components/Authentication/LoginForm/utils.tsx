export const createValidationRulesLogin = () => ({
  email: {
    required: 'Почта обязательна для заполнения',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Некорректный формат почты',
    },
  },
  password: {
    required: 'Пароль обязателен для заполнения',
    minLength: {
      value: 6,
      message: 'Пароль должен содержать не менее 6 символов',
    },
    maxLength: {
      value: 50,
      message: 'Пароль должен содержать не более 50 символов',
    },
    pattern: {
      value: /^[A-Za-z0-9!@#$%^&*()_+]+$/,
      message: 'Пароль может содержать только латинские буквы, цифры и спецсимволы',
    },
  },
});
