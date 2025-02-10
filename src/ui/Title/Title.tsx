import * as React from 'react'
import clsx from 'clsx';

import cls from './Title.module.scss';

export interface ITitleProps extends React.PropsWithChildren {
  className?: string;
}

export const Title: React.FC<ITitleProps> = ({
  children,
  className,
}) => (
  <div className={clsx(cls.title, className)}>{children}</div>
)
