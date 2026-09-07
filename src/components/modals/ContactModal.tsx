'use client';

import { useEffect, useState } from 'react';
import { useSite } from '@/providers/SiteProvider';
import { contact } from '@/data/contact';

const inquiryTypes = [
  'General Inquiry',
  'Partnership Opportunity',
  'Venue Registration',
  'Technical Support',
  'Other',
];

export default function ContactModal() {
  const { contactModalOpen, closeContactModal } = useSite();
  const [nextUrl, setNextUrl] = useState('https://epiverse.in/thank-you');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/thank-you`);
  }, []);

  return (
    <div
      id="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className={contactModalOpen ? 'open' : ''}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeContactModal();
      }}
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={closeContactModal} aria-label="Close">×</button>
        <div id="contact-modal-form">
          <span className="eyebrow" style={{ fontSize: '10px' }}>GET IN TOUCH</span>
          <h3 id="contact-modal-title">Send us a message.</h3>
          <p className="modal-sub">Have a question about EpiVerse? Fill this out and our team will get back to you shortly.</p>
          <form action={`https://formsubmit.co/${contact.email.toLowerCase()}`} method="POST" onSubmit={() => setSubmitting(true)}>
            <input type="hidden" name="_subject" value="New message from EpiVerse website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={nextUrl} />

            <div className="form-row">
              <input className="field" type="text" name="First Name" placeholder="First Name *" required />
              <input className="field" type="text" name="Last Name" placeholder="Last Name" />
            </div>
            <input className="field" type="email" name="Email" placeholder="Email Address *" required />
            <input className="field" type="tel" name="Phone" placeholder="Phone Number" />
            <select className="field" name="Inquiry Type" defaultValue="">
              <option value="" disabled>Select Inquiry Type</option>
              {inquiryTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <textarea className="field" name="Message" placeholder="Your Message *" required />

            <button
              type="submit"
              className="btn btn-gold"
              style={{ width: '100%', justifyContent: 'center', height: '52px', fontSize: '15px', marginTop: '4px' }}
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Send Message →'}
            </button>

            <p className="contact-form-status">
              Trouble sending? Email us directly at{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
