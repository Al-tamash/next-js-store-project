'use client'
import { Button } from '@/components/ui/button'
import { adminLinks, links } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar() {
  const pathname = usePathname()
  return (
    <aside>
      {adminLinks.map((link) => {
        const isActive = pathname === link.href
        const variant = isActive ? 'default' : 'ghost'
        return (
          <Button
            asChild
            className='w-full mb-2 justify-start font-normal capitalize'
            variant={variant}
          >
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          </Button>
        )
      })}
    </aside>
  )
}

export default Sidebar
