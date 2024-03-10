import { roboto } from "@/fonts/fonts"
import Head from "next/head"
export default function Contacts() {
    return (
        <div>
            <Head>
                <title>Contacts</title>
            </Head>
            <h1 className={roboto.className}>Contacts</h1>
        </div>
    )
}