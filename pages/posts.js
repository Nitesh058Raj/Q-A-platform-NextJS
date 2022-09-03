import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Posts.module.css";
import Footer from "../components/footer";
import NavBar from "../components/main-navigation";
import Link from "next/link";


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
      <h1 className={styles.p}>Questions</h1>
      <h1>{data.Quser}</h1>

      {data.Items.map(function (item, i) {
        return (
          <div className={styles.box} key={i} >
            <Link href="/blog/[id]" as={"/blog/" + item.Qid}>
              <div>
                <b className={styles.p}>{item.Qtitle}</b>
                <div className={styles.p}>
                  Ask By : {item.Quser}{" "}
                  <div className={styles.p2}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Created At :{" "}
                    {item.createdAt}
                  </div>
                </div>
              </div>
            </Link>
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
    `api`
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
