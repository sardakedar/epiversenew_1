'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children?: ReactNode;
  as?: ElementType;
  delay?: 'd2' | 'd3' | 'd4';
  className?: string;
  style?: React.CSSProperties;
};

export default function Reveal({ children, as: Tag = 'div', delay, className = '', style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const classes = ['reveal', delay, inView ? 'in' : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
