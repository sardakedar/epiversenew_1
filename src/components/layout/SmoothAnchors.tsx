'use client';

import { useEffect } from 'react';

// Smooth-scrolls in-page "#section" links, then cleans the hash out of the URL.
export default function SmoothAnchors() {
  useEffect(() => {
    const stripHash = () => {
      // Keep the path + query, drop the `#fragment` — no reload, no history entry.
      history.replaceState(null, '', window.location.pathname + window.location.search);
    };

    const scrollToId = (id: string, smooth: boolean) => {
      const el = id ? document.getElementById(id) : null;
      const behavior: ScrollBehavior = smooth ? 'smooth' : 'auto';
      if (el) {
        el.scrollIntoView({ behavior, block: 'start' });
      } else {
        // Bare "#" (logo / placeholder links) → back to the top.
        window.scrollTo({ top: 0, behavior });
      }
    };

    // Deep link on first load: let the browser settle, land on the section, then clean up.
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      requestAnimationFrame(() => {
        scrollToId(id, false);
        stripHash();
      });
    }

    const onClick = (e: MouseEvent) => {
      // Don't hijack new-tab / modified clicks or non-primary mouse buttons.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href') ?? '';
      if (!href.startsWith('#')) return;

      const id = decodeURIComponent(href.slice(1));

      // Points to a section that doesn't exist here.
      if (id && !document.getElementById(id)) {
        // On a sub-page (e.g. /policies), send it to the homepage section instead of doing nothing.
        if (window.location.pathname !== '/') {
          e.preventDefault();
          window.location.href = `/${href}`;
          return;
        }
        // Already home and the section is genuinely missing — swallow it, don't dirty the URL.
        e.preventDefault();
        return;
      }

      e.preventDefault();
      scrollToId(id, true);
      stripHash();
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
