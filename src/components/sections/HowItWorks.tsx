import Reveal from '@/components/ui/Reveal';
import { howItWorksSteps } from '@/data/howItWorks';

const DELAYS = [undefined, 'd2', 'd3'] as const;

export default function HowItWorks() {
  return (
    <section className="sec sec-light curve-top cv-a" id="how">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow light">How it works</span>
          <h2 style={{ color: 'var(--txt-l1)' }}>Up and running in under 2 hours.</h2>
          <p>No IT team. No complicated setup. Sign up, configure your menu and floor plan, and you&apos;re live — most venues go live the same day.</p>
        </Reveal>
        <div className="how-steps">
          {howItWorksSteps.map((step, i) => (
            <Reveal key={step.num} className="how-step" delay={DELAYS[i]}>
              <div className="how-num">{step.num}</div>
              <div className="how-icon"><svg viewBox="0 0 24 24"><path d={step.icon} /></svg></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
