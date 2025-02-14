import clsx from 'clsx';
import cls from './ContentLayout.module.scss';

export interface IContentLayoutProps extends React.PropsWithChildren {
  title?: string;
  className?: string;
}

/**
 * @description Обертка с переиспользуемыми стилями над разными компонентами
 */
export const ContentLayout: React.FC<IContentLayoutProps> = ({
  title,
  className,
  children,
}) => (
  <section className={clsx(cls.layout, className)}>
    {title && <div className={cls.title}>{title}</div>}
    {children}
  </section>
);
