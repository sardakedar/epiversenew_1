export type PricingPlan = {
  id: string;
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  showPeriod?: boolean;
  amountSmall?: boolean;
  forText: string;
  features: string[];
  listVariant?: 'gold';
  ctaLabel: string;
  ctaVariant: 'gold' | 'ghost-dark';
  featured?: boolean;
  revealDelay?: 'd2' | 'd3';
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: '₹ 1,999',
    yearlyPrice: '₹ 1,599',
    showPeriod: true,
    forText: 'For single-outlet cafés and QSRs',
    features: [
      'Cloud POS · 1 terminal',
      'UPI, card & cash payments',
      'Menu management',
      'Basic inventory tracking',
      'Self-order kiosk · 1 screen',
      'Guest profiles (basic)',
      'Sales reports',
      '24/7 support',
    ],
    ctaLabel: 'Get started →',
    ctaVariant: 'ghost-dark',
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: '₹ 3,999',
    yearlyPrice: '₹ 3,199',
    showPeriod: true,
    forText: 'For growing restaurants and small chains',
    features: [
      'Everything in Starter, plus:',
      'Up to 5 billing terminals',
      'Full inventory management',
      'Table reservations',
      'Loyalty programme & offers',
      'Zomato & Swiggy sync',
      'Staff roles & permissions',
      'Advanced analytics (50+ reports)',
      'Full guest profiles',
      'Priority support',
    ],
    listVariant: 'gold',
    ctaLabel: 'Get started →',
    ctaVariant: 'gold',
    featured: true,
    revealDelay: 'd2',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    yearlyPrice: 'Custom',
    amountSmall: true,
    forText: 'For multi-outlet chains and cloud kitchen brands',
    features: [
      'Everything in Growth, plus:',
      'Unlimited terminals',
      'Multi-outlet central dashboard',
      'Central kitchen sync',
      'API & webhook access',
      'Dedicated account manager',
      'SLA uptime guarantee',
      'On-site onboarding & training',
    ],
    ctaLabel: 'Talk to sales →',
    ctaVariant: 'ghost-dark',
    revealDelay: 'd3',
  },
];

export const pricingTrust = ['No setup fees', 'Cancel any time', 'Free migration', '₹ billing'];
