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
      viewBox="0 0 512 512"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path
              d="M353.957 196.193s-7.547-70.366-77.364-72.32c-69.817-1.954-105.674 52.774-105.674 130.958s39.627 140.733 107.558 140.733c67.932 0 75.48-78.183 75.48-78.183l130.201 7.817s7.666 70.613-46.818 124.486c-54.486 53.869-121.362 62.671-168.066 62.305-46.703-.373-111.457.732-174.076-63.404-62.619-64.135-73.246-126.44-73.246-187.643 0-61.206 11.875-142.285 86.33-203.77C158.884 15.394 210.18 0 261.484 0c214.178 0 228.563 197.539 228.563 197.539l-136.09-1.346z"
              />
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
