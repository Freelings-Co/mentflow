import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

export default function Reveal({ children, rootMargin = '0px 0px -20% 0px', ...rest }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''}`}
      {...rest}
    >
      {children}
    </div>
  );
}
