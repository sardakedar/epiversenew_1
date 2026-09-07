'use client';

import { useState, type ReactNode } from 'react';
import { CheckCircleIcon } from './icons';

export type FlipCardData = {
  label: string;
  frontIconPath: string;
  frontTitle: string;
  frontText: ReactNode;
  backTitle: string;
  backText: ReactNode;
};

export default function FlipCard({ label, frontIconPath, frontTitle, frontText, backTitle, backText }: FlipCardData) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((v) => !v);

  return (
    <div className={`flip-card${flipped ? ' flipped' : ''}`}>
      <div
        className="flip-inner"
        role="button"
        tabIndex={0}
        aria-label={label}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <div className="flip-face flip-front">
          <span className="flip-badge"><svg viewBox="0 0 24 24"><path d={frontIconPath} /></svg></span>
          <div className="flip-icon"><svg viewBox="0 0 24 24"><path d={frontIconPath} /></svg></div>
          <h4>{frontTitle}</h4>
          <p>{frontText}</p>
          <span className="flip-cue">↺ Tap for the fix</span>
        </div>
        <div className="flip-face flip-back">
          <span className="flip-badge"><CheckCircleIcon /></span>
          <div className="flip-icon"><CheckCircleIcon /></div>
          <h4>{backTitle}</h4>
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
}
