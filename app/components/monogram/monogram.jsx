import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="30"
      height="30"
      viewBox="0 0 50 50"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
              d="M16.29 7.14 11.86 0H0v50h10.79V17.57l13.92 21.14H25l5.61-8.51zM38.14 0l-9.38 15.09 5.73 9.22 4.58-6.95V50H50V0zM27.5 17.12l-1.24 2 5.65 9.11 1.28-1.94z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
