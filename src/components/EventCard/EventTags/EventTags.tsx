'use client';

import { Tag } from 'ui-kit-conf/dist';
import { useEventTagsPresentation } from './utils';

import cls from './EventTags.module.scss';

export interface IEventTagsProps {
  tags: string[];
  visibleTagsNumber?: number;
}

export const EventTags: React.FC<IEventTagsProps> = ({ tags, visibleTagsNumber = 5 }) => {
  const { visibleTags, hiddenTagsNumber } = useEventTagsPresentation(tags, visibleTagsNumber);

  if (!tags.length) {
    return null
  }

  return (
    <section className={cls.tags}>
      {visibleTags.map((tag) => (
        <Tag className={cls.tag} key={tag} type="default">
          {tag}
        </Tag>
      ))}
      {hiddenTagsNumber > 0 && <Tag type="default">Ещё {hiddenTagsNumber}</Tag>}
    </section>
  );
};
