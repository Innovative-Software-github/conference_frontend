'use client';

import React from 'react';
import {
  Button,
  FieldWrapper,
  Icon,
  IconType,
  Input,
} from 'ui-kit-conf/dist';
import Link from 'next/link';
import { AuthenticationContainer } from '../AuthenticationContainer/AuthenticationContainer';

import cls from './LoginForm.module.css';
import { ROUTES } from '../../../constants/Routes';
import { validateFormState } from './utils';
import { IRegistrationAuthForm, IRegistrationAuthFormErrors } from '../RegistrationForm/RegistrationForm';

// Пароль:
// Длина больше >= 6
// Только латиница
// Только буквы и цифры и спецсимволы
// Не больше 50 символов

export interface ILoginAuthForm extends Omit<IRegistrationAuthForm, 'access'> {}

export interface ILoginAuthFormErrors extends Omit<IRegistrationAuthFormErrors, 'access'> {}

export const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [formState, setFormState] = React.useState<ILoginAuthForm>({
    email: '',
    password: '',
  });
  const [errors] = React.useState<ILoginAuthFormErrors>({
    email: false,
    password: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, name: keyof ILoginAuthForm) => {
    setFormState((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const isEmailPassportCompleted = !formState.email || !formState.password;

  const eyeIconButton = (
    <button
      type="button"
      className={cls.eyeButton}
      onClick={() => setIsPasswordVisible((isVisible) => !isVisible)}
    >
      <Icon
        type={isPasswordVisible ? IconType.Eye_20 : IconType.EyeOff_20}
        width={20}
        height={20}
      />
    </button>
  );

  const { type, text } = validateFormState(formState);

  return (
    <AuthenticationContainer title="Вход">
      <FieldWrapper
        className={cls.fieldWrapper}
        type={type as unknown as any}
        text={text}
        label="Почта"
      >
        <Input
          value={formState.email}
          placeholder="Введите почту"
          onChange={(event) => handleInputChange(event, 'email')}
        />
      </FieldWrapper>
      <FieldWrapper
        className={cls.fieldWrapper}
        type={errors.email ? 'error' : 'info'}
        label="Пароль"
        text={(
          <div className={cls.forgotLinkContainer}>
            <Link href="/" className={cls.forgotLink}>Забыли пароль?</Link>
          </div>
        )}
      >
        <Input
          value={formState.password}
          placeholder="Введите пароль"
          type={isPasswordVisible ? 'text' : 'password'}
          elSuffix={eyeIconButton}
          onChange={(event) => handleInputChange(event, 'password')}
        />
      </FieldWrapper>
      <Button
        className={cls.button}
        type="button"
        variant="default"
        isDisabled={isEmailPassportCompleted}
      >
        Продолжить
      </Button>
      <div className={cls.registation}>
        <span>Еще нет аккаунта?</span>
        <Link href={ROUTES.registation}>Зарегистрироваться</Link>
      </div>
    </AuthenticationContainer>
  );
};
