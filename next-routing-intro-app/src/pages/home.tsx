import { roboto } from "@/fonts/fonts"
import Head from "next/head"
export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <h1 className={roboto.className}>Home</h1>
        </div>
    )
}