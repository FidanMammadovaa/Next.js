import Link from "next/link"
import { ReactNode } from "react"

import { inter } from "@/fonts/fonts"

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div style={{ fontSize: 16, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <nav style={{ flexDirection: 'row', paddingTop: 0 }}>
                <ul className={inter.className} style={{ justifyContent: 'space-between', display: 'flex', listStyle: 'none', fontSize: 20, backgroundColor: '#293241', padding: 26 }}>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                    <li>
                        <Link href="/account">Account</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
            <header className={inter.className}>
                <h1>Header</h1>
            </header>
            {children}
            <footer className={inter.className}>
                <h1>
                    Footer
                </h1>
            </footer>


        </div>
    )
}