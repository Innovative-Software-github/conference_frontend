'use client';

import React from 'react';
import Link from 'next/link';
import { Icon, IconType } from 'ui-kit-conf/dist';
import { useMediaQuery } from 'react-responsive';

import cls from './AuthenticationContainer.module.css';
import { MediaQuery } from '@/constants/MediaQuery';
import { ROUTES } from '@/constants/Routes';
import { ContentLayout } from '@/ui/ContentLayout/ContentLayout';

export interface IAuthenticationContainer extends React.PropsWithChildren {
  title: string;
}

export const AuthenticationContainer: React.FC<IAuthenticationContainer> = ({ title, children }) => {
  const isMobile = useMediaQuery({ maxWidth: MediaQuery.BigMobile });

  return (
    <div className={cls.container}>
      <Link href={ROUTES.home}>
        <Icon type={IconType.Logotype} width={!isMobile ? 521 : 343} height={!isMobile ? 41 : 32} />
      </Link>

      <ContentLayout className={cls.contentContainer}>
        <div className={cls.title}>{title}</div>
        {children}
      </ContentLayout>
    </div>
  );
};
