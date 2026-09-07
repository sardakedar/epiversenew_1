'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type SiteContextValue = {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  contactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const openContactModal = useCallback(() => setContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setContactModalOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || contactModalOpen ? 'hidden' : '';
  }, [menuOpen, contactModalOpen]);

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContactModal();
    };
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [closeContactModal]);

  return (
    <SiteContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        closeMenu,
        contactModalOpen,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used within a SiteProvider');
  return ctx;
}
