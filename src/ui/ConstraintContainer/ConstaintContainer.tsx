import clsx from 'clsx';
import cls from './ConstraintContainer.module.scss';

export interface IConstraintContainerProps extends React.PropsWithChildren {
  className?: string;
}

/**
 * @description Контейнер, ограничивающий размер внутреннего контента
 */
export const ConstraintContainer: React.FC<IConstraintContainerProps> = ({ children, className }) => (
  <section className={clsx(cls.container, className)}>{children}</section>
);
