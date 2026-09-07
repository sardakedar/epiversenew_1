import type { Metadata } from 'next';
import { Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Thank You | EpiVerse',
  description: 'Thanks for reaching out to EpiVerse. Our team will get back to you shortly.',
  alternates: { canonical: 'https://epiverse.in/thank-you' },
  robots: 'noindex, follow',
};

export default function ThankYouPage() {
  return (
    <>
      <section className="policy-hero">
        <div className="wrap">
          <div className="policy-hero-intro" style={{ textAlign: 'center' }}>
            <span className="eyebrow">GET IN TOUCH</span>
            <h1>Message sent!</h1>
            <p>Thanks for reaching out. Our team will get back to you shortly.</p>
            <a href="/" className="btn btn-gold" style={{ marginTop: '24px', display: 'inline-flex' }}>
              Back to home
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
