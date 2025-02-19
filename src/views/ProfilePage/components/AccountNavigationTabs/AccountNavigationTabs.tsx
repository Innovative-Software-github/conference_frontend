'use client'

import * as React from 'react'
import clsx from 'clsx';

import cls from './AccountNavigationTabs.module.scss';

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
      <div className={cls.sidebar}>
        {navigationTabs.map((tab) => (
          <button
            key={tab.id}
            type='button'
            className={clsx(cls.sidebarButton, {
              [cls.sidebarButtonActive]: tab.id === activeTabId,
            })}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={cls.content}>{activeTab?.content}</div>
    </div>
  )
}
