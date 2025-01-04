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
import { Controller, useForm } from 'react-hook-form';
import Link from 'next/link';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { AuthenticationContainer } from '../AuthenticationContainer/AuthenticationContainer';
import cls from './RegistrationForm.module.css';
import { ROUTES } from '../../../../../constants/Routes';
import { createValidationRulesRegistration, errorMessages } from './utils';
import { ILoginRequest, ILoginResponse, IRegistrationRequest } from '../../../../../services/authentication/interfaces';
import { registration } from '../../../../../services/authentication/request';
import { setServerCookie } from '../../../../../utils/cookies';

const ACCESS = 'Согласен с Правилами использования, которые включают в себя настоящую Политику Конфиденциальности';

export const RegistrationForm = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegistrationRequest>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      accept_rules: false,
    },
  });

  const eyeIconButton = (
    <button
      type="button"
      className={cls.eyeButton}
      onClick={() => setIsPasswordVisible((isVisible) => !isVisible)}
      aria-label={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
    >
      <Icon
        type={isPasswordVisible ? IconType.EyeOff_20 : IconType.Eye_20}
        width={20}
        height={20}
      />
    </button>
  );

  const validationRules = React.useMemo(() => createValidationRulesRegistration(), []);

  const onSubmit = async (data: ILoginRequest) => {
    try {
      setIsLoading(true);
      const response = await registration(data);

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
    <AuthenticationContainer title="Регистрация">
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={validationRules.email}
          render={({ field }) => (
            <FieldWrapper
              className={cls.fieldWrapper}
              type={errors.email ? 'error' : 'info'}
              label="Почта"
              text={errors.email?.message}
            >
              <Input {...field} placeholder="Введите почту" isError={!!errors.email} />
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
              type={errors.password ? 'error' : 'info'}
              label="Пароль"
              text={
                errors.password ? (
                  errors.password.message
                ) : (
                  <div className={cls.forgotLinkContainer}>
                    <Link href={ROUTES.home} className={cls.forgotLink}>
                      Забыли пароль?
                    </Link>
                  </div>
                )
              }
            >
              <Input
                {...field}
                placeholder="Введите пароль"
                type={isPasswordVisible ? 'text' : 'password'}
                elSuffix={eyeIconButton}
                isError={!!errors.password}
              />
            </FieldWrapper>
          )}
        />

        <Controller
          name="accept_rules"
          control={control}
          rules={validationRules.accept_rules}
          render={({ field }) => (
            <FieldWrapper
              type={errors.accept_rules ? 'error' : 'info'}
              text={errors.accept_rules?.message}
            >
              <Checkbox
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                label={ACCESS}
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
      </form>

      <div className={cls.login}>
        <span>Уже есть аккаунт? </span>
        <Link href={ROUTES.login}>Войти</Link>
      </div>
    </AuthenticationContainer>
  );
};
