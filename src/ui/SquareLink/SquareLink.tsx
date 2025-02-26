import * as React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import cls from './SquareLink.module.scss';

export interface ISquareLinkProps extends React.PropsWithChildren {
  href: string;
  isLocked?: boolean;
  className?: string;
}

export const SquareLink: React.FC<ISquareLinkProps> = ({
  href,
  isLocked = true,
  className,
  children,
}) => (
  <Link href={href} className={clsx(cls.squareLink, className, {
    [cls.locked]: !isLocked,
  })}>
    {children}
  </Link>
)