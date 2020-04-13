import DB from "../db/AH-AP24UHE";
import image from '../db/AH-AP24UHE/0.jpg';
import image1 from '../db/AH-AP24UHE/1.jpg';
import image2 from '../db/AH-AP24UHE/3.jpg';
import image3 from '../db/AH-AP24UHE/3.jpg';
import Head from "next/head";
import Img from 'react-cool-img';
import defaultImg from '../image/default.svg';
import '../styles/styleAR.css'
import Layout from "../component/layout";
// const image ='../db/AH-AP24UHE/0.jpg';
const Content = ()=>(
    <div className="container">
        <Head>
            <meta name="description" content={DB.title+DB.name}/>
            <meta name="keywords" content={DB.title}/>
            <meta name="author" content="John Doe"/>
            <title>{DB.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </Head>
        <Layout>
            <section className='n'>

                <aside className='right col-3'>
                    <Img placeholder={defaultImg} src={image}   debounce={300} alt="Sharp Air condition model AH-AP24UHE main image" />
                    
                    <Img placeholder={defaultImg} src={image1}   debounce={300} alt="Sharp Air condition model AH-AP24UHE first image" />
                    
                    <Img placeholder={defaultImg} src={image2}   debounce={300} alt="Sharp Air condition model AH-AP24UHE second image" />
                    
                    <Img placeholder={defaultImg} src={image3}   debounce={300} alt="Sharp Air condition model AH-AP24UHE third image" />
                </aside>

                <section className='col-3 left'>
                    <header>
                        <h1>{DB.title}</h1>
                    </header>
                    <article >
                        <h2>{DB.name}</h2>
                        <p>cooling capacity :{DB.cooling_capacity} </p>
                        <p>color :{DB.color} </p>
                        <p>plasmacluster :{DB.plasmacluster} </p>
                        <p>made :{DB.made} </p>
                        <p>guarantee :{DB.guarantee} </p>
                        {/* <p> :{DB.} </p> */}
                        <h3>{DB.price}</h3>
                    </article>
                </section>

            </section>
        </Layout>
    </div>
    
)

// data-lazy-loaded
export default Content;

// for console
//  typeof($("img").lazyload) === "function" 
