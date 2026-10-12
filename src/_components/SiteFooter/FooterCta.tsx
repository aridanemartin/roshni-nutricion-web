'use client'

import { usePathname } from 'next/navigation'
import { ROUTES } from '@/content/site'

// The booking call to action is redundant on the contact page itself
export default function FooterCta({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return pathname === ROUTES.contact ? null : children
}
