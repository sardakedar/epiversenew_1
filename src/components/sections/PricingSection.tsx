'use client';

import { Fragment, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import ContactButton from '@/components/ui/ContactButton';
import { CheckIcon } from '@/components/ui/icons';
import { pricingPlans, pricingTrust } from '@/data/pricing';

export default function PricingSection() {
  const [mode, setMode] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="sec sec-dark curve-top cv-b" id="pricing">
      <div className="wrap">
        <Reveal className="sec-head center" style={{ margin: '0 auto 40px' }}>
          <span className="eyebrow">Pricing</span>
          <h2>Simple, transparent pricing.</h2>
          <p>No hidden fees. No long-term contracts. Start small, scale as you grow.</p>
        </Reveal>
        <Reveal className="price-toggle" delay="d2">
          <div className="toggle-pill">
            <button className={`toggle-btn${mode === 'monthly' ? ' active' : ''}`} onClick={() => setMode('monthly')}>Monthly</button>
            <button className={`toggle-btn${mode === 'yearly' ? ' active' : ''}`} onClick={() => setMode('yearly')}>Yearly</button>
          </div>
          <span className="save-badge">Save 20%</span>
        </Reveal>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <Reveal key={plan.id} className={`price-card${plan.featured ? ' featured' : ''}`} delay={plan.revealDelay}>
              {plan.featured && <div className="price-popular">MOST POPULAR</div>}
              <div className="price-name">{plan.name}</div>
              <div>
                <span className={`price-amount${plan.featured ? ' fp' : ''}`} style={plan.amountSmall ? { fontSize: '24px' } : undefined}>
                  {mode === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                {plan.showPeriod && <span className="price-period">/mo</span>}
              </div>
              <div className="price-for">{plan.forText}</div>
              <div className="price-div"></div>
              <ul className={`price-list${plan.listVariant ? ` ${plan.listVariant}` : ''}`}>
                {plan.features.map((feature) => (
                  <li key={feature}><CheckIcon />{feature}</li>
                ))}
              </ul>
              <ContactButton className={`btn btn-${plan.ctaVariant} price-cta`}>{plan.ctaLabel}</ContactButton>
            </Reveal>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '28px', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--txt-d3)' }}>
          {pricingTrust.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && <span>·</span>}
              <span>{item}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
