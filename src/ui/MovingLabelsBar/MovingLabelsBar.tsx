'use client';

import React from 'react';

import cls from './MovingLabelsBar.module.css';

export interface IMovingLabelsBarProps {
  labels: string[];
}

export const MovingLabelsBar: React.FC<IMovingLabelsBarProps> = ({ labels }) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [animationDuration, setAnimationDuration] = React.useState<number>(10);
  const [repeatCount, setRepeatCount] = React.useState<number>(1);

  React.useLayoutEffect(() => {
    if (contentRef.current && containerRef.current) {
      const contentWidth = contentRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;

      const minRepeatCount = Math.ceil(containerWidth / contentWidth) + 1;

      setRepeatCount(minRepeatCount);

      const scrollableWidth = contentWidth * minRepeatCount;
      const speed = 150;
      const duration = scrollableWidth / speed;

      setAnimationDuration(duration);
    }
  }, [labels]);

  const repeatedLabels = Array.from(
    { length: repeatCount },
    () => labels,
  ).flat();

  return (
    <div className={cls.bar} ref={containerRef}>
      <div className={cls.scrollingContainer}>
        <div
          className={cls.content}
          style={{ animationDuration: `${animationDuration}s` }}
          ref={contentRef}
        >
          {repeatedLabels.map((label, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className={cls.label} key={`${label}-${index}`}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
