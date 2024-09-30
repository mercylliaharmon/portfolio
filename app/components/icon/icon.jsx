import { classes } from '~/utils/style';
import styles from './icon.module.css';
import { forwardRef } from 'react';
import sprites from './icons.svg';

export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      role="img"
      ref={ref}
      className={classes(styles.icon, className)}
      width={size || 24}
      height={size || 24}
      {...rest}
    >
      <use href={`/icons.svg#${icon}`} />
    </svg>
  );
});
