'use client';

import { useSite } from '@/providers/SiteProvider';
import { navLinks } from '@/data/nav';
import { contact } from '@/data/contact';

export default function MobileNav() {
  const { menuOpen, closeMenu, openContactModal } = useSite();

  return (
    <div id="mobile-nav" className={menuOpen ? 'open' : ''} aria-hidden={!menuOpen}>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
      ))}
      <a href="/faqs" onClick={closeMenu}>FAQs</a>
      <a href="/policies" onClick={closeMenu}>Policies</a>
      <div className="mobile-nav-ctas">
        <button className="btn btn-ghost-dark" onClick={closeMenu}>Book a demo</button>
        <button
          className="btn btn-gold"
          onClick={() => {
            openContactModal();
            closeMenu();
          }}
        >
          Get started →
        </button>
      </div>
      <div className="mobile-nav-contact">
        {contact.phones.map((phone, i) => (
          <span key={phone.tel}>
            {i > 0 && <>&nbsp;/&nbsp;</>}
            {phone.display}
          </span>
        ))}
      </div>
    </div>
  );
}
