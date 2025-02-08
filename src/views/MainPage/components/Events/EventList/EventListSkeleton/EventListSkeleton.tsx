import * as React from 'react';
import { ContentLayout } from '../../../../../../ui/ContentLayout/ContentLayout';
import cls from './EventListSkeleton.module.scss';

export const EventListSkeleton: React.FC = () => {
  const skeletonItems = Array.from({ length: 12 });

  return (
    <ContentLayout>
      <div className={cls.skeletonContainer}>
        {skeletonItems.map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={cls.cardSkeleton} key={index}>
            <div className={cls.imageSkeleton} />
            <div className={cls.titleSkeleton} />
            <div className={cls.locationSkeleton} />
            <div className={cls.datesSkeleton} />
            <div className={cls.footerSkeleton} />
          </div>
        ))}
      </div>
    </ContentLayout>
  );
};
