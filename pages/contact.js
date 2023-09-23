import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ContactUs.module.css";
import Footer from "../components/footer";
import NavBar from "../components/main-navigation";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us Page" />
        <link rel="icon" href="/qada.png" />
      </Head>

      <NavBar />
      <h1>Contact Us</h1>
      
      <Footer />
    </div>
  );
}
