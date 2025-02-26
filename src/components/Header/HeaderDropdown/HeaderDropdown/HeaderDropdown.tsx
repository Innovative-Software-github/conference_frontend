import * as React from 'react'
import Link from 'next/link';

import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import cls from './HeaderDropdown.module.scss';
import {
  DEFAULT_PROFILE_QUERY_SECTION,
} from '../../../../views/ProfilePage/components/AccountNavigationTabs/AccountNavigationTabsItems';
import { useOnClickOutside } from '../../../../hooks/useClickOutside';

export interface IHeaderDropdownOptions {
  href: string;
  label: string;
}

export interface IHeaderDropdown {
  isOpen: boolean;
  options: IHeaderDropdownOptions[];
  onCloseMenu: () => void;
}

export const HeaderDropdown: React.FC<IHeaderDropdown> = ({
  isOpen,
  options,
  onCloseMenu,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const querySectionValue = useSearchParams().get(DEFAULT_PROFILE_QUERY_SECTION);

  const getQuerySectionValue = (option: IHeaderDropdownOptions) => option.href.split('=')[1];

  useOnClickOutside(containerRef, onCloseMenu)

  return (
    <div
      ref={containerRef}
      className={clsx(cls.container, {
        [cls.isOpen]: isOpen,
      })}
    >
      {options?.map((option, key) => (
        <Link
          // eslint-disable-next-line react/no-array-index-key
          key={key}
          href={option.href}
          className={clsx(cls.link, {
            [cls.activeLink]: querySectionValue === getQuerySectionValue(option),
          })}
          onClick={onCloseMenu}
        >
          {option.label}
        </Link>
      ))}
    </div >
  )
}