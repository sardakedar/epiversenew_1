import {
  HeroSection,
  BenefitsStrip,
  // HowItWorks: not live yet
  PlatformEcosystem,
  PlatformModules,
  // FeatureCloudPOS, FeatureInventory: not live yet
  ProblemsSolutions,
  // BuiltForIndia: not live yet
  Integrations,
  Testimonial,
  Philosophy,
  FinalCta,
  // PricingSection: built, kept off the live page
} from '@/components/sections';
import { Footer } from '@/components/layout';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsStrip />
      <PlatformEcosystem />
      <Philosophy />
      <PlatformModules />
      <ProblemsSolutions />
      <Testimonial />
      <Integrations />
      <FinalCta />
      <Footer />
    </>
  );
}
