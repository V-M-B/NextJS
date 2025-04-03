import React from 'react'
import Link from 'next/link'
import usePathname from 'next/navigation'

const navLinks=[
    {name:"Register",href:"/register"},
    {name:"Login",href:"/login"},
    {name:"forgot password",href:"/forgot-password"},
]
export default function AuthLayout({
    children,
}: {
    children: React. ReactNode;
    }) {
    return (
        <div className="">
            {navLinks.map((link) => (
                <Link href={link.href} key={link.name}> {link.name}</Link>
            ))}
            {children}
            </div>
    );
}
