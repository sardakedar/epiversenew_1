import type { Metadata } from 'next';
import FaqContent from '@/components/faqs/FaqContent';
import { Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'FAQs | EpiVerse',
  description:
    "Answers to common questions about Epiverse — the infrastructure layer connecting venue operations, customers, transactions, and engagement for dine-in hospitality.",
  alternates: { canonical: 'https://epiverse.in/faqs' },
};

export default function FaqsPage() {
  return (
    <>
      <FaqContent />
      <Footer />
    </>
  );
}
