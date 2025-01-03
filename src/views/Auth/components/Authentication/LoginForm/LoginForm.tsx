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
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { AuthenticationContainer } from '../AuthenticationContainer/AuthenticationContainer';
import { ROUTES } from '../../../../../constants/Routes';
import { createValidationRulesLogin, errorMessages } from './utils';
import { ILoginRequest, ILoginResponse } from '../../../../../services/authentication/interfaces';
import { login } from '../../../../../services/authentication/request';
import { setServerCookie } from '../../../../../utils/cookies';

import cls from './LoginForm.module.css';

export const LoginForm = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginRequest>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const validationRules = React.useMemo(() => (
    createValidationRulesLogin()
  ), []);

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

  const onSubmit = async (data: ILoginRequest) => {
    try {
      setIsLoading(true);
      const response = await login(data);

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorMessages[response.status] || 'Произошла ошибка при входе!';

        toast.error(errorMessage);
        console.log('error:', errorData);
      } else {
        const responseData = (await response.json()) as ILoginResponse;

        setServerCookie('x-auth', responseData.token);

        toast.success('Вы успешно вошли!');
        router.push(ROUTES.home);
      }
    } catch (error) {
      console.error('error', error);
      toast.error('Возникла ошибка. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContainer title="Вход">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={validationRules.email}
          render={({ field }) => (
            <FieldWrapper
              className={cls.fieldWrapper}
              type={errors.email ? 'error' : 'info'}
              text={errors.email ? errors.email.message : ''}
              label="Почта"
            >
              <Input
                {...field}
                isError={!!errors.email}
                placeholder="Введите почту"
              />
            </FieldWrapper>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={validationRules.password}
          render={({ field }) => (
            <FieldWrapper
              className={cls.fieldWrapper}
              label="Пароль"
              type={errors.password ? 'error' : 'info'}
              text={
                errors.password ? (
                  errors.password.message
                ) : (
                  <div className={cls.forgotLinkContainer}>
                    <Link href="/" className={cls.forgotLink}>Забыли пароль?</Link>
                  </div>
                )
              }
            >
              <Input
                {...field}
                isError={!!errors.password}
                placeholder="Введите пароль"
                type={isPasswordVisible ? 'text' : 'password'}
                elSuffix={eyeIconButton}
              />
            </FieldWrapper>
          )}
        />
        <Button
          className={cls.button}
          type="submit"
          variant="default"
          isDisabled={!isValid}
          isLoading={isLoading}
        >
          Продолжить
        </Button>
        <div className={cls.registation}>
          <span>Еще нет аккаунта?</span>
          <Link href={ROUTES.registation}>Зарегистрироваться</Link>
        </div>
      </form>
    </AuthenticationContainer>
  );
};
