import path from "path";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Blocks injected/malicious scripts. Inline is allowed for hydration + JSON-LD tags.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws:" : ""}`,
  "worker-src 'self' blob:",
  "form-action 'self' https://formsubmit.co",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

// Standard hardening headers, sent on every response.
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" }, // force HTTPS
  { key: "X-Frame-Options", value: "SAMEORIGIN" }, // clickjacking protection
  { key: "X-Content-Type-Options", value: "nosniff" }, // no MIME-sniffing
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  poweredByHeader: false, // hide the framework from attackers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
