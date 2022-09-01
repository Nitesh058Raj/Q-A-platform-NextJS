import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ContactUs.module.css";
// import Contact from '../components/contact'
import Footer from "../components/footer";
import NavBar from "../components/main-navigation";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      {/* <Contact /> */}
      <h1>Contact Us</h1>
      
      <Footer />
    </div>
  );
}
