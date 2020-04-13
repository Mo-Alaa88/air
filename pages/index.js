import Head from 'next/head'
import Layout from '../component/layout'
import '../styles/styleAR.css'
// import DB from '../db/db.js'
import Content from './content'

const Home = () => (
  <div className="container">
    <Head>
      <meta name="description" content="Free Web tutorials"/>
      <meta name="keywords" content="HTML,CSS,XML,JavaScript"/>
      <meta name="author" content="John Doe"/>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    </Head>
    

    <main>
    <Layout>



      {/* <div className='black-block'></div> */}
      <h1 className="title">
        Welcome to 
        {/* <Content/>  */}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>

      </Layout>
    </main>


  </div>
)

export default Home
