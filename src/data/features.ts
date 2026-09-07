export const cloudPosFeatures = [
  'One-tap billing · split payments · UPI, card, cash',
  'Instant KOT — print or kitchen display screen',
  'GST-compliant bills with auto-calculate (CGST/SGST/IGST)',
];

export const inventoryFeatures = [
  'Live stock updated per every order placed',
  'Low-stock alerts triggered before service begins',
  'Recipe costing down to the ingredient level',
  'Supplier purchase order generation in one tap',
];

export const platformModules = [
  { name: 'Cloud POS & real-time billing', icon: 'feat-cloudpos.png', group: 'ops' },
  { name: 'Table & floor management', icon: 'feat-tables.png', group: 'ops' },
  { name: 'Real-time menu management', icon: 'feat-menu.png', group: 'ops' },
  { name: 'Digital reservations', icon: 'feat-reservations.png', group: 'guest' },
  { name: 'Payments dashboard', icon: 'feat-payments.png', group: 'ops' },
  { name: 'Staff roles & access control', icon: 'feat-staff.png', group: 'ops' },
  { name: 'Inventory management', icon: 'feat-inventory.png', group: 'ops' },
  { name: 'Guest profiles & history', icon: 'feat-guests.png', group: 'ops' },
  { name: 'Live queue visibility', icon: 'feat-queue.png', group: 'both' },
  { name: 'Guest self-ordering', icon: 'feat-selforder.png', group: 'guest' },
  { name: 'Dual interface (guest & venue)', icon: 'feat-dual.png', group: 'both' },
  { name: 'Instant waiter calling', icon: 'feat-waiter.png', group: 'both' },
  { name: 'Reports & analysis', icon: 'feat-reports.png', group: 'ops' },
  { name: 'Delivery aggregator integration', icon: 'feat-delivery.png', group: 'ops' },
  { name: 'Offers & coupon engine', icon: 'feat-offers.png', group: 'ops' },
  { name: '24/7 support', icon: 'feat-support.png', group: 'ops' },
] as const;
