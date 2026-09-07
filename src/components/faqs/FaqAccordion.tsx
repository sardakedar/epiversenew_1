'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@/components/ui/icons';
import { faqs } from '@/data/faqs';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.q} className={`faq-item${open ? ' open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{faq.q}</span>
              <ChevronDownIcon />
            </button>
            <div className="faq-answer" style={{ maxHeight: open ? '400px' : '0px' }}>
              <p>{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
