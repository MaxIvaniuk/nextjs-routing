'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navlink({ href, children }) {
    const path = usePathname()

    return(
        <li>
            <Link 
                href={href} 
                className={path.startsWith(href) ? 'active' : undefined}
            >
                {children}
            </Link>
        </li>
    )
}