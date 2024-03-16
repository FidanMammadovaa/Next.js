import Link from "next/link"
import { ReactNode } from "react"
import styled from "styled-components";
import { inter } from "@/fonts";
import { CustomLayout } from "./CustomLayout";
import { CustomNav } from "./CustomNav";
import { CustomUl } from "./CustomUl";

interface Props {
    children: ReactNode
}


export default function Layout({ children }: Props) {
    return (
        <CustomLayout>
            <CustomNav>
                <CustomUl className={inter.className}>
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
                        <Link href="/cars">Cars</Link>
                    </li>
                </CustomUl>
            </CustomNav>
            {/* <header className={inter.className}>
                <h1>Header</h1>
            </header> */}
            {children}
            {/* <footer className={inter.className}>
                <h1>
                    Footer
                </h1>
            </footer> */}


        </CustomLayout>
    )
}
