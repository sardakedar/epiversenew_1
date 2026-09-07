'use client';

import type { CSSProperties, ReactNode } from 'react';
import { useSite } from '@/providers/SiteProvider';

type ContactButtonProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function ContactButton({ id, className = 'btn btn-ghost-dark', style, children }: ContactButtonProps) {
  const { openContactModal } = useSite();
  return (
    <button id={id} className={className} style={style} onClick={openContactModal}>
      {children}
    </button>
  );
}
