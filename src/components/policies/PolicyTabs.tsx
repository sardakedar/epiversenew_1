'use client';

import { useEffect, useState } from 'react';
import { FileTextIcon, CreditCardIcon, ShieldIcon } from '@/components/ui/icons';

const tabs = [
  { id: 'terms', label: 'Terms & Conditions', Icon: FileTextIcon },
  { id: 'refund', label: 'Refund Policy', Icon: CreditCardIcon },
  { id: 'privacy', label: 'Privacy Policy', Icon: ShieldIcon },
];

export default function PolicyTabs() {
  const [active, setActive] = useState(tabs[0].id);

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="policy-tabs" aria-label="Policy sections">
      {tabs.map(({ id, label, Icon }) => (
        <a key={id} href={`#${id}`} className={`policy-tab${active === id ? ' active' : ''}`}>
          <Icon />
          {label}
        </a>
      ))}
    </nav>
  );
}
