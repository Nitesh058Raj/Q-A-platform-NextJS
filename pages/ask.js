import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Ask.module.css";
import Footer from "../components/footer";
import NavBar from "../components/main-navigation";

export default function Ask() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ask</title>
        <meta name="description" content="Ask Question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <h1>Create Question</h1>
      <Footer />
    </div>
  );
}
