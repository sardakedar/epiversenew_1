import Reveal from '@/components/ui/Reveal';
import { flipCards } from '@/data/flipCards';

export default function ProblemsSolutions() {
  return (
    <section className="sec sec-dark" id="problems">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Real Problems</span>
          <h2>Problems and Solutions</h2>
          <p>And how EpiVerse fixes them, not with another dashboard, but by removing the problem entirely.</p>
        </Reveal>
        <div className="problem-grid">
          {flipCards.map((card) => (
            <div className="problem-card" key={card.label}>
              <div className="problem-half problem-half-problem">
                <div className="ps-tag ps-tag-problem"><span className="ps-dot"></span>Problem</div>
                <h4>{card.frontTitle}</h4>
                <p>{card.frontText}</p>
              </div>
              <div className="problem-half problem-half-solution">
                <div className="ps-tag ps-tag-solution"><span className="ps-dot"></span>EpiVerse</div>
                <h4>{card.backTitle}</h4>
                <p>{card.backText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
