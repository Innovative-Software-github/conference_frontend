import clsx from 'clsx';
import cls from './ContentLayout.module.scss';

export interface IContentLayoutProps extends React.PropsWithChildren {
  className?: string;
}

/**
 * @description Обертка с переиспользуемыми стилями над разными компонентами
 */
export const ContentLayout: React.FC<IContentLayoutProps> = ({ className, children }) => (
  <section className={clsx(cls.layout, className)}>{children}</section>
);
