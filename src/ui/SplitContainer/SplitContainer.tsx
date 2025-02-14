import * as React from 'react';
import clsx from 'clsx';

import { Title } from '../Title/Title';

import cls from './SplitContainer.module.scss';

export interface ISplitContainerProps {
  className?: string;
  title?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

/**
 * Компонент-контейнер, который разделяет содержимое на две пропорциональные части.
 *
 * @param {string} [props.className] - Дополнительный класс для контейнера.
 * @param {string} [props.title] - Оглавнение.
 * @param {React.ReactNode} [props.leftContent] - Компонент для отображения в левой панели.
 * @param {React.ReactNode} [props.rightContent] - Компонент для отображения в правой панели.
 *
 * @returns {JSX.Element} Компонент SplitContainer.
 */
export const SplitContainer: React.FC<ISplitContainerProps> = ({
  className,
  title,
  leftContent,
  rightContent,
}) => (
  <>
    {title && <Title>{title}</Title>}
    <div className={clsx(cls.splitContainer, className)}>
      {leftContent}
      {rightContent}
    </div>
  </>
);
