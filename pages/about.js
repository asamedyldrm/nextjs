import Link from "next/link"
import Head from "next/head"

export default function About(){
    return <div>
        <Head>
            <title>Hakkında</title>
        </Head>
        <h3>About Page</h3>
        <Link href="/">
            Geri Dön
        </Link>

        <style jsx>{`
        h3{
            color:red;
        }
        `}</style>
    </div>
}