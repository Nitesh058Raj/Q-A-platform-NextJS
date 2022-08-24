import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Footer from '../components/footer'
import NavBar from '../components/main-navigation'

import data from '../data.json'

const info = data.Experiences;

// feach data here with serverside fetching 

export default function Posts() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Posts</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
  
       
        <NavBar />
        <Layout />
        <h1>Posts</h1>
        {/* Reprent data here with the bookmark page : golangprogramin.com/somthing */}
        <ul>
            {info.map(s => (<li>{s}</li>))}
        </ul>

        <Footer />
      </div>
    )
  }
  
  