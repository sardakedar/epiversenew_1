'use client';

import { useEffect, useRef } from 'react';

export default function CountUp({ target, suffix = '+', duration = 1200 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      if (reduceMotion) {
        el.textContent = target + suffix;
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);

  return (
    <div className="stat-num" data-target={target} ref={ref}>
      0{suffix}
    </div>
  );
}
