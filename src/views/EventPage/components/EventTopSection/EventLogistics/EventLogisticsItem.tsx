import * as React from 'react';

import cls from './EventLogistics.module.scss';

export interface IEventLogisticsItem extends React.PropsWithChildren {
  title: string;
}

export const EventLogisticsItem: React.FC<IEventLogisticsItem> = ({
  title,
  children,
}) => (
  <div className={cls.itemWrapper}>
    <div className={cls.title}>{title}</div>
    <div className={cls.children}>{children}</div>
  </div>
)
