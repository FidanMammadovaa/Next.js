import { roboto } from "@/fonts/fonts"
import Head from "next/head"
export default function Account() {
    return (
        <div>
            <Head>
                <title>Account</title>
            </Head>
            <h1 className={roboto.className}>Account</h1>
        </div>
    )
}