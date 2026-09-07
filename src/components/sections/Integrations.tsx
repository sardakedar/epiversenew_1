import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { integrationLogos } from '@/data/integrations';

const trackItems = [...integrationLogos, ...integrationLogos];

const SLIGHT_ENLARGED_LOGOS = new Set(['meta.png', 'zoho.png']);
const ENLARGED_LOGOS = new Set(['hdfc-smartgateway.png']);
const EXTRA_ENLARGED_LOGOS = new Set(['google-ads.png', 'whatsapp-business.png']);

export default function Integrations() {
  return (
    <section className="sec-dark2 integrations-sec" id="integrations">
      <div className="wrap">
        <Reveal className="integrations-cap">Integrations we offer</Reveal>
      </div>

      <div className="marquee-sec" style={{ background: 'transparent', border: 'none', padding: '24px 0 0' }}>
        <div className="marquee-track">
          {trackItems.map((item, i) => (
            <span className="integration-tile" key={`${item.name}-${i}`}>
              <Image
                src={`/assets/integrations/${item.logo}`}
                alt={item.name}
                width={320}
                height={130}
                className={
                  EXTRA_ENLARGED_LOGOS.has(item.logo)
                    ? 'integration-logo-xl'
                    : ENLARGED_LOGOS.has(item.logo)
                      ? 'integration-logo-lg'
                      : SLIGHT_ENLARGED_LOGOS.has(item.logo)
                        ? 'integration-logo-sm-lg'
                        : undefined
                }
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
