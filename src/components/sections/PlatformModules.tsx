'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { platformModules } from '@/data/features';

export default function PlatformModules() {
  const [filter, setFilter] = useState<'all' | 'ops' | 'guest'>('all');
  const visibleModules = filter === 'all'
    ? platformModules
    : platformModules.filter((module) => module.group === filter || module.group === 'both');

  return (
    <section className="sec sec-dark" id="modules">
      <div className="wrap">
        <Reveal className="mod-explorer">
          <div className="mod-explorer-head">
            <div>
              <span className="eyebrow">Module explorer</span>
              <h2>Sixteen modules, one subscription</h2>
            </div>
            <div className="mod-filters" role="group" aria-label="Filter modules">
              {[
                ['all', 'All 16'],
                ['ops', 'Operations'],
                ['guest', 'Guest experience'],
              ].map(([value, label]) => (
                <button
                  className={`mod-filter${filter === value ? ' active' : ''}`}
                  key={value}
                  type="button"
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value as 'all' | 'ops' | 'guest')}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="mod-grid">
            {visibleModules.map((module) => (
              <div className="mod-box" key={module.name}>
                <div className="mod-tile">
                  <Image src={`/assets/web/${module.icon}`} alt="" width={86} height={86} />
                </div>
                <span className="mod-name">{module.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
