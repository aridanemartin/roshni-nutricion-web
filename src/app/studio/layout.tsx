import type { Metadata } from 'next'

// The Sanity Studio must never be indexed or appear in search results.
export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: 'Panel de administración',
}

export default function StudioLayout({
  children,
}: {
  readonly children: React.ReactNode
}) {
  return children
}
