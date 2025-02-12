import * as React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import cls from './SquareLink.module.scss';

export interface ISquareLinkProps extends React.PropsWithChildren {
  href: string;
  className?: string;
}

export const SquareLink: React.FC<ISquareLinkProps> = ({
  href,
  className,
  children,
}) => (
  <Link href={href} className={clsx(cls.squareLink, className)}>
    {children}
  </Link>
)