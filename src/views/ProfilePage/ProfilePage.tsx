import * as React from 'react'
import { ICurrentUserResponse } from '../../services/user/interfaces'
import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { IResponse } from '../../services/customFetch';
import { Title } from '../../ui/Title/Title';
import { ConstraintContainer } from '../../ui/ConstraintContainer/ConstaintContainer';
import { AccountNavigationTabs, ITabConfig } from './components/AccountNavigationTabs/AccountNavigationTabs';
import { ProfileAccount } from './components/ProfileAccount/ProfileAccount';
import { ProfileEvents } from './components/ProfileEvents/ProfileEvents';
import { ProfileCommunity } from './components/ProfileCommunity/ProfileCommunity';

import cls from './ProfilePage.module.scss';

export interface IProfilePage {
  currentUser: IResponse<ICurrentUserResponse>;
}

export const ProfilePage: React.FC<IProfilePage> = ({
  currentUser,
}) => {
  const navigationTabs: ITabConfig[] = [
    {
      id: 0,
      label: 'Аккаунт',
      content: <ProfileAccount currentUser={currentUser.data} />,
    },
    {
      id: 1,
      label: 'Мои события',
      content: <ProfileEvents />,
    },
    {
      id: 2,
      label: 'Мои сообщества',
      content: <ProfileCommunity />,
    },
  ]

  return (
    <div className={cls.container}>
      <MovingLabelsBar />
      <Header isUserAuth={currentUser.ok} />
      <main className={cls.main}>
        <ConstraintContainer>
          <Title>Личный кабинет</Title>
          <AccountNavigationTabs navigationTabs={navigationTabs} />
        </ConstraintContainer>
      </main>
      <Footer />
    </div>
  )
}