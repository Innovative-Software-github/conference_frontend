'use client';

import React from 'react';
import Link from 'next/link';
import { Icon, IconType, Input } from 'ui-kit-conf/dist';
import { useMediaQuery } from 'react-responsive';

import { ROUTES } from '../../constants/Routes';
import { MediaQuery } from '../../constants/MediaQuery';
import { ConstraintContainer } from '@/ui/ConstraintContainer/ConstaintContainer';
import { SquareLink } from '../../ui/SquareLink/SquareLink';

import cls from './Header.module.scss';

export interface IHeader {
  isUserAuth?: boolean;
}

export const Header: React.FC<IHeader> = ({
  isUserAuth,
}) => {
  const isMobile = useMediaQuery({ maxWidth: MediaQuery.BigMobile });

  return (
    <ConstraintContainer>
      <header className={cls.header}>
        <Link href={ROUTES.home} className={cls.homeLink}>
          <Icon type={IconType.Logotype} width={!isMobile ? 141 : 121} height={31} isScalable />
        </Link>

        <Input
          className={cls.input}
          placeholder="Найти событие"
          elPrefix={<Icon type={IconType.Search_20} width={20} height={20} />}
        />
        <SquareLink href={ROUTES.createEvent} className={cls.link}>
          <Icon type={IconType.Plus_20} width={20} height={20} />
        </SquareLink>
        <SquareLink href={ROUTES.profile} className={cls.link} isLocked={isUserAuth}>
          <Icon type={IconType.Profile_20} width={20} height={20} />
        </SquareLink>
      </header>
    </ConstraintContainer>
  );
};
