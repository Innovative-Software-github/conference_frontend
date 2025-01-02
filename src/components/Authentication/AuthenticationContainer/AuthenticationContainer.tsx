'use client';

import React from 'react';
import Link from 'next/link';
import { Icon, IconType } from 'ui-kit-conf/dist';
import { useMediaQuery } from 'react-responsive';

import { Container } from '../../../ui/Container/Container';
import { ROUTES } from '../../../constants/Routes';
import { MediaQuery } from '../../../constants/MediaQuery';

import cls from './AuthenticationContainer.module.css';

export interface IAuthenticationContainer extends React.PropsWithChildren {
  title: string;
}

export const AuthenticationContainer: React.FC<IAuthenticationContainer> = ({ title, children }) => {
  const isMobile = useMediaQuery({ maxWidth: MediaQuery.BigMobile });

  return (
    <div className={cls.container}>
      <Link href={ROUTES.home}>
        <Icon type={IconType.Logotype} width={isMobile ? 343 : 521} height={isMobile ? 32 : 41} />
      </Link>

      <Container className={cls.contentContainer}>
        <div className={cls.title}>{title}</div>
        {children}
      </Container>
    </div>
  );
};
