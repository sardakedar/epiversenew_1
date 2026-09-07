export type IndiaCard = { icon: string; title: string; text: string };

export const indiaCards: IndiaCard[] = [
  {
    icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
    title: 'GST-Ready Billing',
    text: 'Every bill auto-splits CGST, SGST & IGST by item type. HSN codes, e-invoicing and GSTIN on receipts — out of the box.',
  },
  {
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    title: 'UPI-First Payments',
    text: 'UPI is the default. Razorpay, HDFC SmartGateway, PhonePe & Google Pay integrated. QR payments from the table in one tap.',
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Aggregator-Native',
    text: 'Zomato, Swiggy, ONDC orders flow directly into your POS without a middle screen. Menu sync updates in real time.',
  },
  {
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    title: 'India Support, Always',
    text: 'Dedicated team in IST — phone, WhatsApp or chat. Every day, including weekends and Indian public holidays.',
  },
];
