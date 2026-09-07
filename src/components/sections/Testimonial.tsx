'use client';

import { useEffect, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/data/testimonials';

export default function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[active];

  return (
    <section className="sec-dark2 feedback-sec" id="testimonial">
      <div className="wrap">
        <Reveal className="feedback-inner">
          <span className="eyebrow">What Owners Say</span>
          <div className="feedback-quote-wrap">
            <blockquote className="feedback-quote" key={active}>&ldquo;{current.quote}&rdquo;</blockquote>
            <div className="feedback-who">{current.who}</div>
          </div>
          <div className="feedback-dots" role="tablist" aria-label="Select feedback">
            {testimonials.map((testimonial, i) => (
              <button
                key={testimonial.who}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show feedback ${i + 1}`}
                className={`feedback-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
