import Reveal from '@/components/ui/Reveal';
import { indiaCards } from '@/data/india';

const DELAYS = [undefined, 'd2', 'd3', 'd4'] as const;

export default function BuiltForIndia() {
  return (
    <section className="sec sec-dark curve-top cv-b">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Built for India</span>
          <h2>Indian restaurants. Indian requirements.</h2>
          <p>Not a global product bolted onto Indian tax rules. EpiVerse is designed from the ground up for the way restaurants work in India.</p>
        </Reveal>
        <div className="india-grid">
          {indiaCards.map((card, i) => (
            <Reveal key={card.title} className="india-card" delay={DELAYS[i]}>
              <div className="ic"><svg viewBox="0 0 24 24"><path d={card.icon} /></svg></div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
