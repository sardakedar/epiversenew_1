import Reveal from '@/components/ui/Reveal';
import { pillars } from '@/data/philosophy';

const DELAYS = [undefined, 'd2', 'd3', 'd4'] as const;

export default function Philosophy() {
  return (
    <div className="sec philosophy-sec" id="why" style={{ padding: '64px 0' }}>
      <div className="wrap">
        <Reveal className="sec-head" style={{ marginBottom: 26 }}>
          <span className="eyebrow">What we stand for</span>
        </Reveal>
        <div className="pillars">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} className="pillar" delay={DELAYS[i]}>
              <h4>{pillar.title}</h4>
              <p>{pillar.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
