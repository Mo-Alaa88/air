import Contacts from "../component/contacts";
import '../styles/styleAR.css'
import Layout from "../component/layout";
import Head from "next/head";
import Nav from "../component/nav";

const ContactUs = ()=>(
    <>
        <Head>
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="HTML,CSS,XML,JavaScript"/>
            <meta name="author" content="John Doe"/>

            <title>Contact Us</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>

        {/* <Nav/> */}
        <Layout/>
        {/* <Contacts/> */}

    </>
)
export default ContactUs