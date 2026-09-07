import type { FlipCardData } from '@/components/ui/FlipCard';

export const flipCards: FlipCardData[] = [
   {
    label: 'Too many systems',
    frontIconPath:
      'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
    frontTitle: 'Too Many Systems',
    frontText: 'POS, billing, CRM, Guest Management and reports never fully connect.',
    backTitle: 'Everything in One Place',
    backText: 'Sixteen modules, one login, one source of truth across your outlets.',
  },
    {
    label: 'Payment issues',
    frontIconPath:
      'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    frontTitle: 'Payment Issues',
    frontText: 'Reconciliation becomes a manual, nightly headache.',
    backTitle: 'Track Every Payment',
    backText: 'Cash, UPI and card payments are automatically tracked across every channel.',
  },
    {
    label: 'Orders get delayed or entered incorrectly',
    frontIconPath: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
    frontTitle: 'Orders get delayed or entered incorrectly',
    frontText: 'Orders passed between staff can lead to mistakes, delays, and repeat orders.',
    backTitle: 'Orders go directly to the kitchen.',
    backText: 'Digital ordering sends every order to the right kitchen station instantly, reducing mistakes and delays.',
  },
  {
    label: 'Not enough staff during busy hours',
    frontIconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    frontTitle: 'Not enough staff during busy hours',
    frontText: 'Service slows down when the restaurant gets busy.',
    backTitle: 'Handle more orders with the same team.',
    backText: 'Self-ordering and faster billing help your team handle busy periods without needing extra staff.',
  },
  {
    label: 'Wastage of inventory',
    frontIconPath:
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    frontTitle: 'Wastage of Inventory',
    frontText: 'Without real-time tracking, losses can go unnoticed.',
    backTitle: 'Track inventory in real time',
    backText: 'Monitor stock and usage to reduce waste and protect margins.',
  },
  {
    label: "You don't own your customer relationships",
    frontIconPath: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    frontTitle: "You don't own your customer relationships",
    frontText: 'Third-party platforms can limit your access to customer data.',
    backTitle: 'Build your own customer channel.',
    backText: 'Drive direct orders and build lasting customer relationships.',
  }
 
];
