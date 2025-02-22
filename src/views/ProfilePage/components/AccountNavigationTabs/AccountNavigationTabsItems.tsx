import * as React from 'react'
import clsx from 'clsx';
import { ITabConfig } from './AccountNavigationTabs';

import cls from './AccountNavigationTabs.module.scss';

export interface IAccountNavigationTabsItems {
  navigationTabs: ITabConfig[];
  activeTabId: number;
  onChangeActiveTabId: (id: number) => void
}

export const AccountNavigationTabsItems: React.FC<IAccountNavigationTabsItems> = ({
  navigationTabs,
  activeTabId,
  onChangeActiveTabId,
}) => (
  <div className={cls.sidebar}>
    {navigationTabs.map((tab) => (
      <button
        key={tab.id}
        type='button'
        className={clsx(cls.sidebarButton, {
          [cls.sidebarButtonActive]: tab.id === activeTabId,
        })}
        onClick={() => onChangeActiveTabId(tab.id)}
      >
        {tab.label}
      </button>
    ))}
  </div>
)
