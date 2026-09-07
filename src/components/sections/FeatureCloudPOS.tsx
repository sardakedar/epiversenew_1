import Reveal from '@/components/ui/Reveal';
import { CheckIcon } from '@/components/ui/icons';
import { cloudPosFeatures } from '@/data/features';

export default function FeatureCloudPOS() {
  return (
    <section className="sec sec-light curve-top cv-a">
      <div className="wrap">
        <div className="feat-grid">
          <Reveal>
            <div className="mac-frame">
              <div className="mac-notch"></div>
              <div className="mac-screen">
                <div className="pos-nav">
                  <span className="pn-logo">● Cloud POS</span>
                  <span className="pn-info">Table 04 · 3 covers · 7:43 PM</span>
                </div>
                <div className="pos-body">
                  <div className="pos-orders">
                    <div className="pos-orow"><span>Butter Chicken</span><span className="qty">×2</span><span className="price">₹ 680</span></div>
                    <div className="pos-orow"><span>Garlic Naan</span><span className="qty">×3</span><span className="price">₹ 180</span></div>
                    <div className="pos-orow"><span>Masala Chai</span><span className="qty">×2</span><span className="price">₹ 100</span></div>
                    <div className="pos-orow"><span>Dal Tadka</span><span className="qty">×1</span><span className="price">₹ 220</span></div>
                  </div>
                  <div className="pos-total-area">
                    <div className="pos-total-row"><span>Subtotal</span><span>₹ 1,180</span></div>
                    <div className="pos-total-row"><span>GST (5%)</span><span>₹ 59</span></div>
                    <div className="pos-total-row"><span>Discount</span><span style={{ color: '#16A34A' }}>-₹ 50</span></div>
                    <div className="pos-total-row grand"><span>Total</span><span style={{ color: '#E8A83E' }}>₹ 1,189</span></div>
                  </div>
                </div>
                <div className="pos-pay-btns">
                  <div className="pos-pbtn upi">UPI</div>
                  <div className="pos-pbtn card">Card</div>
                  <div className="pos-pbtn cash">Cash</div>
                </div>
                <div className="pos-actions">
                  <div className="pos-abtn kot">Print KOT</div>
                  <div className="pos-abtn bill">Bill &amp; Pay →</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay="d2">
            <span className="eyebrow light">Cloud POS</span>
            <h2 className="feat-h3" style={{ color: 'var(--txt-l1)' }}>Billing that keeps up with your busiest hour.</h2>
            <p className="feat-p" style={{ color: 'var(--txt-l2)' }}>
              One-tap order taking, instant KOT to the kitchen, split payments, UPI, GST-ready bills — from a tablet, phone or desktop. No lag, no lost orders.
            </p>
            <ul className="feat-list">
              {cloudPosFeatures.map((feature) => (
                <li key={feature}><CheckIcon />{feature}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
