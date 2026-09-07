'use client';

import Image from 'next/image';
import { navLinks } from '@/data/nav';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo" style={{ color: 'var(--txt-d1)' }}>
              <Image className="logo-ring" src="/assets/logo.png" alt="EpiVerse" width={26} height={26} />
              EpiVerse
            </a>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/1HJeERy5JU/" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.9 2 14.55 2 11.73 2 9.75 3.66 9.75 6.7v2.8h-3v4h3V22h4.25v-8.5z" /></svg>
              </a>
              <a href="https://www.instagram.com/epiverse_biz?igsi=ZWVyemdwbTVyMHFl&utm_source=qr" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="https://in.linkedin.com/company/epiverse" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2.01h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.68c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.53V23h-4V8.25z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
            <a href="/faqs">FAQs</a>
            <a href="/policies">Policies</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright © 2026 EpiVerse.in - All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
