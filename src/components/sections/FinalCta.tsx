import Reveal from '@/components/ui/Reveal';
import ContactButton from '@/components/ui/ContactButton';
import { contact } from '@/data/contact';

export default function FinalCta() {
  return (
    <section className="cta-sec" id="contact">
      <div className="wrap">
        <Reveal className="cta-layout">
          <div className="cta-copy">
            <span className="eyebrow">Ready when you are</span>
            <h2>Ready to modernize your restaurant?</h2>
            <div className="cta-trust">
              <span>No commitment</span>
              <span>Personalized walkthrough</span>
              <span>See real impact</span>
            </div>
            <div className="cta-btns">
              <ContactButton className="btn btn-gold" style={{ padding: '16px 32px', fontSize: '15px' }}>Book a free demo</ContactButton>
              <ContactButton className="btn btn-ghost-dark" style={{ padding: '16px 32px', fontSize: '15px' }}>Talk to sales →</ContactButton>
            </div>
          </div>
          <div className="cta-contact">
            <span className="cta-contact-label">Contact</span>
            <div className="cta-contact-links">
              <a href={`mailto:${contact.email}`} className="cta-contact-email">{contact.email}</a>
              {contact.phones.map((phone) => (
                <a href={`tel:${phone.tel}`} key={phone.tel} className="cta-contact-phone">{phone.display}</a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
