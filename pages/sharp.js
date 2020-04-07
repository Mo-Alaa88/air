import Layout from "../component/layout"
import Head from "next/head"

const Sharp =()=>(
    <div>
        <Head>
        <meta name="description" content="Free Web tutorials"/>
        <meta name="keywords" content="HTML,CSS,XML,JavaScript"/>
        <meta name="author" content="John Doe"/>

        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>

        <Layout>
        <h1>sharp</h1>
        </Layout>
    </div>
)
export default Sharp