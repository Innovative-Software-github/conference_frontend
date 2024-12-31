import { IFormState } from './LoginForm';

export const validateFormState = (formState: IFormState) => {
  if (formState.email.length < 5) {
    return {
      text: 'Не меньше 5 букв',
      type: 'error',
    };
  }

  if (!formState.email.includes('@')) {
    return {
      text: 'Должна быть собака',
      type: 'error',
    };
  }

  return {
    text: '',
    type: 'info',
  };
};
