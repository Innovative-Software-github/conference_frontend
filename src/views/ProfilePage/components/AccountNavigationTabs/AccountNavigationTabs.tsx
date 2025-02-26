'use client'

import * as React from 'react'

import cls from './AccountNavigationTabs.module.scss';
import { AccountNavigationTabsItems } from './AccountNavigationTabsItems';
import { IProfileSections } from '../../../../app/(protected)/profile/page';

export interface ITabConfig {
  id: IProfileSections;
  label: string;
  content: React.ReactNode;
}

export interface IAccountNavigationTabs {
  navigationTabs: ITabConfig[];
  selectedSection: IProfileSections;
}

export const AccountNavigationTabs: React.FC<IAccountNavigationTabs> = ({
  navigationTabs,
  selectedSection,
}) => {
  const activeTab = React.useMemo(
    () => navigationTabs.find((tab) => tab.id === selectedSection),
    [selectedSection, navigationTabs],
  );

  return (
    <div className={cls.container}>
      <AccountNavigationTabsItems
        navigationTabs={navigationTabs}
        activeTabId={selectedSection}
      />
      <div className={cls.content}>{activeTab?.content}</div>
    </div>
  )
}
