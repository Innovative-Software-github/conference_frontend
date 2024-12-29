'use client';

import { Tag } from 'ui-kit-conf/dist';
import styles from './EventTags.module.scss';
import { useEventTagsPresentation } from './hooks/useEventTagsPresentation';

interface IEventTagsProps {
  tags: string[];
  visibleTagsNumber?: number;
}

export const EventTags: React.FC<IEventTagsProps> = ({ tags, visibleTagsNumber = 5 }) => {
  const { visibleTags, hiddenTagsNumber } = useEventTagsPresentation(tags, visibleTagsNumber);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {tags.length !== 0 && (
        <section className={styles.cardTags}>
          {visibleTags.map((tag) => (
            <Tag key={tag} type="default">
              {tag}
            </Tag>
          ))}
          <Tag type="default">Ещё {hiddenTagsNumber}</Tag>
        </section>
      )}
    </>
  );
};