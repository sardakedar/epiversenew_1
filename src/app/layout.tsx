import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Inter, Manrope } from 'next/font/google';
import './globals.scss';
import { SiteProvider } from '@/providers/SiteProvider';
import { Nav, MobileNav, SmoothAnchors, WhatsAppButton, StickyCta } from '@/components/layout';
import { ContactModal } from '@/components/modals';
import { softwareAppSchema } from '@/data/schema';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-manrope' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex-mono' });

export const metadata: Metadata = {
  title: 'EpiVerse | Restaurant OS for India: Cloud POS, UPI Billing & GST Invoicing',
  description:
    "EpiVerse is India's restaurant operating system: cloud POS, UPI billing, GST invoices, Zomato & Swiggy sync, inventory and guest profiles. Book a free demo today.",
  keywords:
    'restaurant POS software India, cloud POS restaurant, GST billing software restaurant, restaurant management software India, Zomato Swiggy POS integration, QSR management software, café POS India, cloud kitchen software India',
  authors: [{ name: 'EIPL, EpiVerse India' }],
  robots: 'index, follow',
  alternates: { canonical: 'https://epiverse.in' },
  icons: {
    icon: '/assets/favicon.png',
    apple: '/assets/favicon.png',
  },
  openGraph: {
    title: 'EpiVerse: Restaurant OS for India',
    description:
      'Cloud POS, UPI billing, GST invoices, Zomato & Swiggy sync. One platform for cafés, QSRs, cloud kitchens and fine dining across India.',
    images: [{ url: 'https://epiverse.in/og-image.jpg', width: 1200, height: 630, alt: 'EpiVerse restaurant management software dashboard' }],
    url: 'https://epiverse.in',
    type: 'website',
    locale: 'en_IN',
    siteName: 'EpiVerse',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@epiverse_in',
    creator: '@epiverse_in',
    title: 'EpiVerse: Restaurant OS for India',
    description: "Cloud POS, UPI billing, GST invoices & aggregator sync for India's restaurants.",
    images: ['https://epiverse.in/og-image.jpg'],
  },
  other: {
    'geo.region': 'IN',
    'geo.country': 'India',
    ICBM: '20.5937, 78.9629',
    language: 'English',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#141b40',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }} />

        <SiteProvider>
          <SmoothAnchors />
          <MobileNav />
          <Nav />
          {children}
          <ContactModal />
          <WhatsAppButton />
          <StickyCta />
        </SiteProvider>
      </body>
    </html>
  );
}
