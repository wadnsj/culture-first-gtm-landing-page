'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '#system', label: 'The System' },
  { href: '#proof', label: 'Instructor' },
  { href: '#pricing', label: 'Pricing' },
]

export function SiteNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-full opacity-0'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-12"
      >
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="size-2.5 rounded-full bg-accent"
          />
          <span className="font-mono text-xs font-bold tracking-widest uppercase">
            Culture-First GTM
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get Access
          <span className="font-mono text-xs font-normal text-primary-foreground/60">
            $350
          </span>
        </a>
      </nav>
    </header>
  )
}
