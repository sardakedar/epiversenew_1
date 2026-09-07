import { CheckIcon } from '@/components/ui/icons';

const benefits = [
  'Under 30 minutes onboarding',
  'Same day staff training',
  'Zero hardware investment',
  'One price, no hidden add-on costs',
  '100% modules on phone',
];

export default function BenefitsStrip() {
  return (
    <section className="benefits-strip" aria-label="EpiVerse benefits">
      <div className="wrap">
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit}>
              <span className="benefit-icon"><CheckIcon /></span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
