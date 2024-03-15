import Link from "next/link"
import { ReactNode } from "react"
import styled from "styled-components";
import { inter } from "@/fonts";
interface Props {
    children: ReactNode
}

const CustomLayout = styled.div({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
})

const CustomNav = styled.nav({
    fontSize: 16,
    flexDirection: 'row',
    backgroundColor: '#293241',
    padding: 26
})

const CustomUl = styled.ul({
    justifyContent: 'space-between',
    display: 'flex',
    listStyle: 'none',
    fontSize: 20,
});



export default function Layout({ children }: Props) {
    return (
        <CustomLayout>
            <CustomNav>
                <CustomUl className={inter.className}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/todos">Todos</Link>
                    </li>
                </CustomUl>
            </CustomNav>
            <header className={inter.className}>
                <h1>Header</h1>
            </header>
            {children}
            <footer className={inter.className}>
                <h1>
                    Footer
                </h1>
            </footer>


        </CustomLayout>
    )
}
