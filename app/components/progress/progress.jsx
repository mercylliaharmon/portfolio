import { useNavigation } from '@remix-run/react';
import { useRef, useEffect, useState } from 'react';
import styles from './progress.module.css';

export function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);

  useEffect(() => {
    clearTimeout(timeout.current);

    if (state !== 'idle') {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);

  useEffect(() => {
    if (!progressRef.current) return;

    const controller = new AbortController();

    if (state !== 'idle') {
      setAnimationComplete(false);
      return () => {
        try {
          if (!controller.signal.aborted) {
            controller.abort();
          }
        } catch (error) {
          // Ignore abort errors during cleanup
        }
      };
    }

    try {
      Promise.all(
        progressRef.current
          .getAnimations({ subtree: true })
          .map(animation => animation.finished)
      ).then(() => {
        if (controller.signal.aborted) return;
        setAnimationComplete(true);
      }).catch(() => {
        // Ignore errors from aborted animations
      });
    } catch (error) {
      // Handle any synchronous errors
      console.warn('Error setting up animation listener:', error);
    }

    return () => {
      try {
        if (!controller.signal.aborted) {
          controller.abort();
        }
      } catch (error) {
        // Ignore abort errors during cleanup
      }
    };
  }, [state]);

  return (
    <div
      className={styles.progress}
      data-status={state}
      data-visible={visible}
      data-complete={animationComplete}
      ref={progressRef}
    />
  );
}
