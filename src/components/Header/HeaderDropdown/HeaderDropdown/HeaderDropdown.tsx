import * as React from 'react'
import Link from 'next/link';

import cls from './HeaderDropdown.module.scss';

export interface IHeaderDropdownOptions {
  href: string;
  label: string;
}

export interface IHeaderDropdown {
  isOpen: boolean;
  options: IHeaderDropdownOptions[];
}

export const HeaderDropdown: React.FC<IHeaderDropdown> = ({
  isOpen,
  options,
}) => (
  <div className={cls.container}>
    {isOpen && options?.map((option, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <Link key={key} href={option.href}>
        {option.label}
      </Link>
    ))}
  </div >
)