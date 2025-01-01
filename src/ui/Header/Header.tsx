'use client';

import React from 'react';
import Link from 'next/link';
import { Icon, IconType, Input } from 'ui-kit-conf/dist';
import { useMediaQuery } from 'react-responsive';

import { ROUTES } from '../../constants/Routes';

import cls from './Header.module.scss';
import { MediaQuery } from '../../constants/MediaQuery';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: MediaQuery.BigMobile });

  return (
    <div className={cls.container}>
      <header className={cls.header}>
        <Link href={ROUTES.home} className={cls.homeLink}>
          <Icon type={IconType.Logotype} width={isMobile ? 121 : 141} height={31} isScalable />
        </Link>

        <Input
          className={cls.input}
          placeholder="Найти событие"
          elPrefix={<Icon type={IconType.Search_20} width={20} height={20} />}
        />

        <Link href={ROUTES.createEvent} className={cls.link}>
          <div className={cls.linkBlock}>
            <Icon type={IconType.Plus_20} width={20} height={20} />
          </div>
        </Link>

        <Link href={ROUTES.profile} className={cls.link}>
          <div className={cls.linkBlock}>
            <Icon type={IconType.Profile_20} width={20} height={20} />
          </div>
        </Link>
      </header>
    </div>
  );
};
