import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Footer from '../components/footer'
import NavBar from '../components/main-navigation'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Index Page for Q and a Plateform" />
        <link rel="icon" href="/qanda.png" />
      </Head>
     
      <NavBar />
      <Layout />
      <Footer />
    </div>
  )
}

