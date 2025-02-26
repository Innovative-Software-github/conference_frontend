import * as React from 'react';
import clsx from 'clsx';

import cls from './SquareButton.module.scss';

export interface ISquareLinkProps extends React.PropsWithChildren {
  isLocked?: boolean;
  className?: string;
  onClick: () => void;
}

export const SquareButton: React.FC<ISquareLinkProps> = ({
  isLocked = true,
  className,
  children,
  onClick,
}) => (
  <button
    type='button'
    className={clsx(cls.squareButton, className, {
      [cls.locked]: !isLocked,
    })}
    onClick={onClick}>
    {children}
  </button>
)