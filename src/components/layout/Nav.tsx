'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ContactButton from '@/components/ui/ContactButton';
import { useSite } from '@/providers/SiteProvider';
import { navLinks } from '@/data/nav';

export default function Nav() {
  const { menuOpen, toggleMenu } = useSite();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#" className="logo">
          <Image className="logo-ring" src="/assets/logo.png" alt="EpiVerse" width={34} height={34} />
          <span className="logo-copy">
            <span className="logo-name">EpiVerse</span>
            <span className="logo-tagline">Connecting diners, elevating experiences</span>
          </span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div className="nav-ctas">
          <ContactButton id="nav-demo-btn" className="btn btn-gold">Book a free demo</ContactButton>
          <button className={`hamburger${menuOpen ? ' open' : ''}`} id="hamburger" aria-label="Open menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
