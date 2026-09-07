import type { MetadataRoute } from 'next';

// Lets search engines in. Real bot/DDoS protection lives in the Vercel Firewall, not here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    host: 'https://epiverse.in',
  };
}
