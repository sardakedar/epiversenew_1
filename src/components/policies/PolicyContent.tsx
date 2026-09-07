import PolicyTabs from './PolicyTabs';
import {
  ArrowLeftIcon,
  FileTextIcon,
  CreditCardIcon,
  ShieldIcon,
  AlertTriangleIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from '@/components/ui/icons';

export default function PolicyContent() {
  return (
    <>
      <section className="policy-hero">
        <div className="wrap">
          <div className="policy-hero-intro">
            <span className="eyebrow">Legal</span>
            <div className="policy-title-row">
              <a href="/" className="policy-back">
                <ArrowLeftIcon />
              </a>
              <h1>Our Policies</h1>
            </div>
            <p>Transparency is at the heart of everything we do. Please review our policies carefully.</p>
          </div>
        </div>
      </section>

      <section className="policy-sec">
        <div className="wrap">
          <PolicyTabs />

          <div className="policy-panel">
            <section className="policy-section" id="terms">
              <h2 className="policy-section-title">
                <span className="policy-section-icon"><FileTextIcon /></span>
                Terms and Conditions
              </h2>

              <p><strong>Acceptance of Terms:</strong> By accessing or using the EpiVerse platform, website, or any associated services, you agree to be legally bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our services.</p>

              <p><strong>Platform Overview:</strong> EpiVerse is a technology platform designed to connect users with curated dining, nightlife, and hospitality experiences. Our services include venue discovery, reservations, event bookings, and digital concierge services. Features may be modified or updated without prior notice.</p>

              <p><strong>Intellectual Property:</strong> All content on this platform, including logos, trademarks, text, graphics, and software, is the exclusive property of EpiVerse India Pvt Ltd. Unauthorized reproduction or distribution is strictly prohibited.</p>

              <p><strong>User Responsibilities:</strong> As a user, you agree to:</p>
              <ul className="policy-list">
                <li>Provide accurate information when creating an account</li>
                <li>Maintain confidentiality of your account credentials</li>
                <li>Use the platform only for lawful purposes</li>
                <li>Not attempt to breach security measures</li>
              </ul>

              <p><strong>Governing Law:</strong> These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.</p>
            </section>

            <section className="policy-section" id="refund">
              <h2 className="policy-section-title">
                <span className="policy-section-icon"><CreditCardIcon /></span>
                Refund &amp; Cancellation Policy
              </h2>

              <p><strong>General Policy:</strong> We strive to ensure your satisfaction. Due to the nature of digital services and venue bookings, our refund policy is designed to be fair to all parties.</p>

              <p><strong>Eligibility for Refunds:</strong> Refunds may be considered for:</p>
              <ul className="policy-list">
                <li><strong>Duplicate Transactions:</strong> Multiple charges for the same service</li>
                <li><strong>Unauthorized Charges:</strong> Transactions not authorized by you</li>
                <li><strong>Service Failure:</strong> Technical errors preventing service delivery</li>
              </ul>

              <div className="policy-highlight">
                <p><strong>Not Eligible for Refund:</strong></p>
                <ul className="policy-check-list">
                  <li>Change of mind</li>
                  <li>Incorrect information provided by user</li>
                  <li>Issues outside our control (venue cancellations, weather)</li>
                  <li>Services already rendered</li>
                </ul>
              </div>

              <p><strong>Cancellation Timeline:</strong></p>
              <ul className="policy-list">
                <li><strong>48+ hours before:</strong> Full refund (minus processing fees)</li>
                <li><strong>24-48 hours before:</strong> 50% refund</li>
                <li><strong>Less than 24 hours:</strong> No refund</li>
                <li><strong>No-show:</strong> No refund</li>
              </ul>

              <p><strong>How to Request:</strong> Email us at <strong className="policy-accent">biz@epiverse.in</strong> within 7 days with:</p>
              <ul className="policy-check-list">
                <li>Full name</li>
                <li>Transaction ID</li>
                <li>Reason for refund</li>
                <li>Proof of payment</li>
              </ul>
            </section>

            <section className="policy-section" id="privacy">
              <h2 className="policy-section-title">
                <span className="policy-section-icon"><ShieldIcon /></span>
                Privacy Policy
              </h2>

              <p><strong>Information We Collect:</strong></p>
              <ul className="policy-list">
                <li><strong>Personal Information:</strong> Name, email, phone number</li>
                <li><strong>Payment Details:</strong> Billing information (processed securely)</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited</li>
                <li><strong>Location:</strong> General area for venue recommendations</li>
              </ul>

              <p><strong>How We Use Your Information:</strong></p>
              <ul className="policy-check-list">
                <li>Provide and personalize services</li>
                <li>Process transactions</li>
                <li>Respond to inquiries</li>
                <li>Improve platform functionality</li>
                <li>Send updates and offers (opt-out available)</li>
              </ul>

              <div className="policy-highlight">
                <p><strong>We do not sell your personal data.</strong> Your trust is our priority.</p>
              </div>

              <p><strong>Data Security:</strong></p>
              <ul className="policy-check-list">
                <li>AES-256 encryption for sensitive data</li>
                <li>SSL/TLS for all transmissions</li>
                <li>Regular security audits</li>
                <li>Strict access controls</li>
              </ul>

              <p><strong>Cookies:</strong> We use cookies to enhance your experience. You can manage cookie preferences in your browser settings.</p>

              <p><strong>Your Rights:</strong> You may request access, correction, or deletion of your data by contacting <strong className="policy-accent">biz@epiverse.in</strong></p>
            </section>

            <section className="policy-section" id="disclaimer">
              <h2 className="policy-section-title">
                <span className="policy-section-icon"><AlertTriangleIcon /></span>
                Disclaimer
              </h2>

              <p><strong>General Disclaimer:</strong> Information on this platform is for general purposes only. We make no warranties about accuracy or completeness.</p>

              <p><strong>Third-Party Links:</strong> We are not responsible for content or practices of third-party websites linked from our platform.</p>

              <p><strong>No Guarantee:</strong> Venue information, pricing, and availability may change. Please verify directly with venues when necessary.</p>

              <p><strong>Limitation of Liability:</strong> EpiVerse shall not be liable for any damages arising from use of our platform or services.</p>
            </section>

            <div className="policy-contact-grid">
              <div className="policy-contact-card">
                <MailIcon />
                <h4>General Inquiries</h4>
                <p><a href="mailto:biz@epiverse.in">biz@epiverse.in</a></p>
              </div>
              <div className="policy-contact-card">
                <PhoneIcon />
                <h4>Phone Support</h4>
                <p><a href="tel:+919175544471">+91 91755 44471</a></p>
                <p><a href="tel:+919175544472">+91 91755 44472</a></p>
              </div>
              <div className="policy-contact-card">
                <MapPinIcon />
                <h4>Address</h4>
                <p>IVORY ESTATE, Ivory Estate Road, Ward No. 8, NCL Colony, Aundh, Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
