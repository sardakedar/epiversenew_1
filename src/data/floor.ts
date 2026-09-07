export type FloorRow = {
  icon: string;
  title: string;
  meta: string;
  status: string;
};

// Rotates every 3.2s on the hero panel, cycling live-floor snapshots.
export const floorFrames: FloorRow[][] = [
  [
    { icon: 'T04', title: 'Table 04', meta: 'Preparing · KOT #1182', status: 'live' },
    { icon: 'T11', title: 'Table 11', meta: 'Self-order · New', status: 'new' },
    { icon: 'Q', title: 'Live queue', meta: '3 waiting · 8 min avg', status: 'ok' },
    { icon: '₹', title: 'Payments today', meta: '₹1,860 · UPI split', status: 'settled' },
    { icon: 'G', title: 'Guest profile', meta: 'Visit #6 · updated', status: 'synced' },
  ],
  [
    { icon: 'T04', title: 'Table 04', meta: 'Served · KOT #1182', status: 'done' },
    { icon: 'T11', title: 'Table 11', meta: 'Self-order · 3 items', status: 'live' },
    { icon: 'Q', title: 'Live queue', meta: '2 waiting · 6 min avg', status: 'ok' },
    { icon: '₹', title: 'Payments today', meta: '₹2,140 · card', status: 'settled' },
    { icon: 'G', title: 'Guest profile', meta: 'Offer matched', status: 'synced' },
  ],
  [
    { icon: 'T07', title: 'Table 07', meta: 'Waiter called · section B', status: 'new' },
    { icon: 'T11', title: 'Table 11', meta: 'Billed · one tap', status: 'done' },
    { icon: 'Q', title: 'Live queue', meta: '4 waiting · 9 min avg', status: 'ok' },
    { icon: '₹', title: 'Payments today', meta: '₹2,390 · UPI', status: 'settled' },
    { icon: 'G', title: 'Guest profile', meta: 'New regular added', status: 'synced' },
  ],
];
