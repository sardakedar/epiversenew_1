import Reveal from '@/components/ui/Reveal';
import { CheckIcon } from '@/components/ui/icons';
import { inventoryFeatures } from '@/data/features';

export default function FeatureInventory() {
  return (
    <section className="sec sec-dark curve-top cv-b">
      <div className="wrap">
        <div className="feat-grid" style={{ direction: 'rtl' }}>
          <Reveal style={{ direction: 'ltr' }}>
            <span className="eyebrow">Inventory &amp; Kitchen</span>
            <h2 className="feat-h3">Know what&apos;s running low before the rush hits.</h2>
            <p className="feat-p" style={{ color: 'var(--txt-d2)' }}>
              Real-time stock levels, auto-alerts before service, recipe costing per ingredient, supplier POs in one tap — so waste and surprises stay out.
            </p>
            <ul className="feat-list dk">
              {inventoryFeatures.map((feature) => (
                <li key={feature}><CheckIcon />{feature}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal style={{ direction: 'ltr' }} delay="d2">
            <div className="inv-panel">
              <div className="inv-header"><span>Inventory · Today&apos;s close</span><span>26 Dec 2025</span></div>
              <div className="inv-row"><span className="name">Chicken (raw)</span><span className="qty">4.2 kg</span><span className="inv-badge inv-low">Low</span></div>
              <div className="inv-row"><span className="name">Paneer</span><span className="qty">8.1 kg</span><span className="inv-badge inv-ok">OK</span></div>
              <div className="inv-row"><span className="name">Cooking oil</span><span className="qty">12 L</span><span className="inv-badge inv-ok">OK</span></div>
              <div className="inv-row"><span className="name">Basmati rice</span><span className="qty">1.8 kg</span><span className="inv-badge inv-crit">Critical</span></div>
              <div className="inv-row"><span className="name">Tomatoes</span><span className="qty">6.4 kg</span><span className="inv-badge inv-ok">OK</span></div>
              <div className="inv-chart">
                <div className="inv-chart-label">This week&apos;s usage</div>
                <div className="inv-bars">
                  <div className="inv-bar" style={{ height: '55%' }}></div>
                  <div className="inv-bar" style={{ height: '80%' }}></div>
                  <div className="inv-bar" style={{ height: '45%' }}></div>
                  <div className="inv-bar" style={{ height: '100%' }}></div>
                  <div className="inv-bar" style={{ height: '72%' }}></div>
                  <div className="inv-bar" style={{ height: '60%' }}></div>
                  <div className="inv-bar today" style={{ height: '85%' }}></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
