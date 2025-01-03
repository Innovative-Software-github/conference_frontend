import React from 'react';
import clsx from 'clsx';

import cls from './Container.module.css';

export interface IContainerProps extends React.PropsWithChildren {
  className?: string;
}

export const Container: React.FC<IContainerProps> = ({ children, className }) => (
  <div className={clsx(cls.container, className)}>
    {children}
  </div>
);
