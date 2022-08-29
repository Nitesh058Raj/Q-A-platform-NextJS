import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Posts.module.css";
import Layout from "../components/layout";
import Footer from "../components/footer";
import NavBar from "../components/main-navigation";


// import useSWR from "swr";
// Testing local json data
// import data from '../data.json'
// const info = data.Experiences;

//{data} == props <-- get from getserverSideProps() function
export default function Posts({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Questions</title>
        <meta name="description" content="Posts --> All Quetions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Layout />
      <h1 className={styles.p}>Questions</h1>
      <h1>{data.Quser}</h1>

      {data.Items.map(function (item, i) {
        return (
          <div className={styles.box} key={i}>
            <h3 className={styles.p}>{item.Quser}</h3>
            <p className={styles.p}>{item.createdAt}</p>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  //HTML is generated at server then send to client-side

  // Fetch data from external API
  const res = await fetch(
    `https://thpc8fu9m6.execute-api.ap-south-1.amazonaws.com/dev/all`
  );
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return {
    props: {
      data: data,
    },
  };
}
