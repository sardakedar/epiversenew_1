import type { Metadata } from 'next';
import PolicyContent from '@/components/policies/PolicyContent';
import { Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Policies | EpiVerse',
  description:
    "Read EpiVerse's Terms and Conditions, Refund and Cancellation Policy, and Privacy Policy for India's restaurant operating system.",
  alternates: { canonical: 'https://epiverse.in/policies' },
};

export default function PoliciesPage() {
  return (
    <>
      <PolicyContent />
      <Footer />
    </>
  );
}
