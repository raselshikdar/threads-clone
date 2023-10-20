import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icons } from '../icons'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

export default function FooterNavs() {
    const path = usePathname()
    const { theme } = useTheme()

    function fillIcon(pathname: string) {
        return path === pathname ? 'white' : theme === "light" ? "white" : "#0F0F0F"
    }

    return (
        <div className="w-full bg-background z-50 fixed bottom-0 flex items-center justify-around p-3 pb-4">
            <Link href="/">
                <Icons.home
                    className={`w-6 h-6 ${path === "/" ? "" : "text-muted-foreground"}`}
                />
            </Link>
            <Link href="/search">
                <Icons.search
                    className={`w-6 h-6 ${path === "/search" ? "" : "text-muted-foreground"
                        }`}
                />
            </Link>
            <Link href="/create">
                <Icons.create
                    className={`w-6 h-6 ${path === "/search" ? "" : "text-muted-foreground"
                        }`}
                />
            </Link>

            <Icons.like
                className={`w-6 h-6 cursor-not-allowed ${path === "/activity" ? "" : "text-muted-foreground"
                    }`}
            />
            {/* </Link> */}
            <Link href={`/`}>
                <Icons.profile className="w-6 h-6 text-muted-foreground" />
            </Link>
        </div>
    )
}