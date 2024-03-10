import { roboto } from "@/fonts/fonts"
import Head from "next/head"

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <h1 className={roboto.className}>About</h1>
        </div>
    )
}