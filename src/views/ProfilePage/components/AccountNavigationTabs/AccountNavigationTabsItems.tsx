import * as React from 'react'
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';

import { ITabConfig } from './AccountNavigationTabs';
import { IProfileSections } from '../../../../app/(protected)/profile/page';

import cls from './AccountNavigationTabs.module.scss';

export const DEFAULT_PROFILE_QUERY_SECTION = 'section';

export interface IAccountNavigationTabsItems {
  navigationTabs: ITabConfig[];
  activeTabId: IProfileSections;
}

export const AccountNavigationTabsItems: React.FC<IAccountNavigationTabsItems> = ({
  navigationTabs,
  activeTabId,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (id: IProfileSections) => {
    router.push(`${pathname}?${DEFAULT_PROFILE_QUERY_SECTION}=${id}`);
  };

  return (
    <div className={cls.sidebar}>
      {navigationTabs.map((tab) => (
        <button
          key={tab.id}
          type='button'
          className={clsx(cls.sidebarButton, {
            [cls.sidebarButtonActive]: tab.id === activeTabId,
          })}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}