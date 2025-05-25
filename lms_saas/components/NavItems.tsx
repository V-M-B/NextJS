'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavItem =[
    {label: 'Home', href: '/' },
    {label: 'My Journey', href: '/my-journey' },
    {label: 'Companions', href: '/companions' },
]

const NavItems = () => {
// use path name hook nextjs to get the current path and highlight the active link 'use clint' is used to get the current path
const pathname = usePathname();
  return (
    <nav className='flex items-center gap-4'>
        {NavItem.map(({label,href}) => (
            <Link href={href}
             key={label} 
             className={cn(pathname===href &&'text-primary font-semibold')}
             >
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItems