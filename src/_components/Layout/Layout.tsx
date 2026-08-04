import { ReactNode } from 'react'

interface LayoutProps {
  maxWidth?: string
  children: ReactNode
  className?: string
}

const Layout = ({ maxWidth, children, className }: LayoutProps) => (
    <section className={className} style={{ maxWidth: maxWidth }}>
      {children}
    </section>
  )

export default Layout
