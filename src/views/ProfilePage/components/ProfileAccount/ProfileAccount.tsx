'use client'

import * as React from 'react'
import { Button, FieldWrapper, Icon, IconType, Input } from 'ui-kit-conf/dist';

import { ContentLayout } from '../../../../ui/ContentLayout/ContentLayout'

import cls from './ProfileAccount.module.scss';
import { ICurrentUserResponse } from '../../../../services/user/interfaces';

export interface IProfileAccount {
  currentUser: ICurrentUserResponse;
}

export const ProfileAccount: React.FC<IProfileAccount> = ({
  currentUser,
}) => (
  <ContentLayout className={cls.container}>
    <div className={cls.block}>
      <div className={cls.title}>ЛИЧНЫЕ ДАННЫЕ</div>
      <FieldWrapper type="disabled" label='Почта'>
        <Input
          isDisabled
          value={currentUser?.email}
          placeholder='Введите почту'
        />
      </FieldWrapper>
    </div>

    <div className={cls.block}>
      <div className={cls.title}>ИЗМЕНЕНИЕ ПАРОЛЯ</div>

      <FieldWrapper type="info" label='Новый пароль' className={cls.changePassportFieldWrapper}>
        <Input
          elSuffix={<Icon className={cls.eyeIcon} type={IconType.EyeOff_20} width={20} height={20} />}
          placeholder='Введите пароль'
        />
      </FieldWrapper>

      <FieldWrapper type="info" label='Повторите пароль' className={cls.changePassportFieldWrapper}>
        <Input
          elSuffix={<Icon className={cls.eyeIcon} type={IconType.EyeOff_20} width={20} height={20} />}
          placeholder='Введите пароль'
        />
      </FieldWrapper>
    </div>

    <div className={cls.block}>
      <div className={cls.title}>УДАЛЕНИЕ АККАУНТА</div>
      <Button
        type="button"
        leftIconType={IconType.Trash_20}
        variant='text'
        className={cls.button}
      >
        Удалить аккаунт
      </Button>
    </div>
  </ContentLayout>
)