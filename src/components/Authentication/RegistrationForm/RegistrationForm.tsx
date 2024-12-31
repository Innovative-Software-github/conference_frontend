'use client';

import React from 'react';
import {
  Button,
  Checkbox,
  FieldWrapper,
  Icon,
  IconType,
  Input,
} from 'ui-kit-conf/dist';
import Link from 'next/link';
import { AuthenticationContainer } from '../AuthenticationContainer/AuthenticationContainer';

import cls from './RegistrationForm.module.css';
import { ROUTES } from '../../../constants/Routes';

export interface IRegistrationAuthForm {
  email: string;
  password: string;
  access: boolean;
}

export interface IRegistrationAuthFormErrors {
  email: boolean;
  password: boolean;
  access: boolean;
}

// TODO: Придумать название
const ACCESS = 'Согласен с Правилами использования, которые включают в себя настоящую Политику Конфиденциальности';

export const RegistrationForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [formState, setFormState] = React.useState<IRegistrationAuthForm>({
    email: '',
    password: '',
    access: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, name: keyof IRegistrationAuthForm) => {
    setFormState((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

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

  return (
    <AuthenticationContainer title="Регистрация">
      <FieldWrapper className={cls.fieldWrapper} type="info" label="Почта">
        <Input
          value={formState.email}
          placeholder="Введите почту"
          onChange={(event) => handleInputChange(event, 'email')}
        />
      </FieldWrapper>
      <FieldWrapper
        className={cls.fieldWrapper}
        type="info"
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
      <Checkbox
        label={ACCESS}
        checked={formState.access}
        onChange={(event) => setFormState((prev) => ({
          ...prev,
          access: event.target.checked,
        }))}
      />
      <Button className={cls.button} type="button" variant="default">
        Продолжить
      </Button>
      <div className={cls.login}>
        <span>Уже есть аккаунт? </span>
        <Link href={ROUTES.login}>Войти</Link>
      </div>
    </AuthenticationContainer>
  );
};
