import { classes, cssProps, numToMs } from '~/utils/style';
import styles from './divider.module.css';

export const Divider = ({
                            lineWidth = '100%',        // Default value for lineWidth
                            lineHeight = '2px',       // Default value for lineHeight
                            notchWidth = '90px',      // Default value for notchWidth
                            notchHeight = '10px',     // Default value for notchHeight
                            collapseDelay = 0,        // Default value for collapseDelay
                            collapsed = false,        // Default value for collapsed
                            className,
                            style,
                            ...rest
                        }) => (
    <div
        className={classes(styles.divider, className)}
        style={cssProps(
            {
                lineWidth,
                lineHeight,
                notchWidth,
                notchHeight,
                collapseDelay: numToMs(collapseDelay),
            },
            style
        )}
        {...rest}
    >
        <div className={styles.line} data-collapsed={collapsed} />
        <div
            className={styles.notch}
            data-collapsed={collapsed}
            style={cssProps({ collapseDelay: numToMs(collapseDelay + 160) })}
        />
    </div>
);
