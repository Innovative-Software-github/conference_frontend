import React from 'react';
import clsx from 'clsx';

import cls from './ConstraintContainer.module.scss';

export interface IConstraintContainerProps extends React.PropsWithChildren {
  className?: string;
}

export const ConstraintContainer: React.FC<IConstraintContainerProps> = ({ children, className }) => (
  <section className={clsx(cls.container, className)}>{children}</section>
);
