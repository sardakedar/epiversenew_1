import FaqAccordion from './FaqAccordion';
import ContactButton from '@/components/ui/ContactButton';
import { ArrowLeftIcon } from '@/components/ui/icons';

export default function FaqContent() {
  return (
    <>
      <section className="policy-hero">
        <div className="wrap">
          <div className="policy-hero-intro">
            <span className="eyebrow">Support</span>
            <div className="policy-title-row">
              <a href="/" className="policy-back">
                <ArrowLeftIcon />
              </a>
              <h1>Frequently Asked Questions</h1>
            </div>
            <p>Everything you need to know about how Epiverse works. Can&apos;t find your answer? Talk to our team.</p>
          </div>
        </div>
      </section>

      <section className="policy-sec">
        <div className="wrap">
          <div className="policy-panel faq-panel">
            <FaqAccordion />

            <div className="faq-cta">
              <p>Still have questions?</p>
              <ContactButton className="btn btn-gold" id="faq-contact-btn">Talk to our team →</ContactButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
