'use client'

import * as React from 'react'

import cls from './AccountNavigationTabs.module.scss';
import { AccountNavigationTabsItems } from './AccountNavigationTabsItems';

export interface ITabConfig {
  id: number;
  label: string;
  content: React.ReactNode;
}

export interface IAccountNavigationTabs {
  navigationTabs: ITabConfig[];
}

export const AccountNavigationTabs: React.FC<IAccountNavigationTabs> = ({
  navigationTabs,
}) => {
  const [activeTabId, setActiveTabId] = React.useState(navigationTabs[0]?.id);

  const activeTab = navigationTabs.find((tab) => tab.id === activeTabId);

  return (
    <div className={cls.container}>
      <AccountNavigationTabsItems
        navigationTabs={navigationTabs}
        activeTabId={activeTabId}
        onChangeActiveTabId={setActiveTabId}
      />
      <div className={cls.content}>{activeTab?.content}</div>
    </div>
  )
}
