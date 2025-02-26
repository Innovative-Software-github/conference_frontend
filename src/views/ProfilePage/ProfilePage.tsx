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
import { IEventsResponse } from '../../services/events/interfaces';

import cls from './ProfilePage.module.scss';
import { IProfileSections } from '../../app/(protected)/profile/page';

export interface IProfilePage {
  currentUser: IResponse<ICurrentUserResponse>;
  eventsList: IResponse<IEventsResponse[]>;
  selectedSection: IProfileSections;
}

export const ProfilePage: React.FC<IProfilePage> = ({
  currentUser,
  eventsList,
  selectedSection,
}) => {
  const navigationTabs: ITabConfig[] = [
    {
      id: 'account',
      label: 'Аккаунт',
      content: <ProfileAccount currentUser={currentUser.data} />,
    },
    {
      id: 'events',
      label: 'Мои события',
      content: <ProfileEvents eventsList={eventsList.data} />,
    },
    {
      id: 'communities',
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
          <AccountNavigationTabs navigationTabs={navigationTabs} selectedSection={selectedSection} />
        </ConstraintContainer>
      </main>
      <Footer />
    </div>
  )
}