import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Footer from '../components/footer'
import NavBar from '../components/main-navigation'

export default function Contact() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Contact</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
  
       
        <NavBar />
        <Layout />
        <h1>Contact</h1>
        <Footer />
      </div>
    )
  }
  
  