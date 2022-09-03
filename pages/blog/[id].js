import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Answer.module.css";
import Footer from "../../components/footer";
import NavBar from "../../components/main-navigation";
import { Fragment } from "react";

export default function Answer({ data }) {
  const sendAnswer = async (event) => {
    event.preventDefault();
    const url = "api" + data.Qid;
    const res = await fetch(url, {
      body: JSON.stringify({
        Qid: data.Qid,
        Quser: data.Quser,
        Qtitle: data.Qtitle,
        createdAt: data.createdAt,
        Qdetails: data.Qdetails,
        Ansuser: event.target.Ansuser.value,
        Answer: event.target.Answer.value,
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
    alert("Done !!!");
  };

  const ConditionalWrapper = ({ children, condition }) => {
    return condition ? (
      <Fragment>
        <div>
          <b>Your Name as Answer User : </b>
        </div>
        <input
          className={styles.input_box}
          id="Ansuser"
          name="Ansuser"
          type="text"
          autoComplete="from"
          required
        />
        <div>
          <b>You Can Answer Here : </b>
        </div>
        <textarea
          className={styles.text_box}
          id="Answer"
          name="Answer"
          type="text"
          autoComplete="from"
          required
        />
        <button type="submit" className={styles.subbtn}>
          Send
        </button>
      </Fragment>
    ) : (
      children
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ask</title>
        <meta name="description" content="Answer Question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className={styles.grid}>
        <form onSubmit={sendAnswer}>
          <h1 className={styles.h1text}>Answer</h1>
          <div htmlFor="Quser">
            <b>User Name: </b>
            {data.Quser}
          </div>

          <div htmlFor="Question">
            <b>Question: </b>
          </div>
          <div>{data.Qtitle}</div>

          <div htmlFor="Quetion_details">
            <b>Quetion details: </b>
          </div>
          <div> {data.Qdetails}</div>
          <div>
            <b>Created At : </b>
            {data.createdAt}
          </div>

          <ConditionalWrapper condition={data.checked == 0}>
            <div>
              <b>Answer : </b>
              {data.Answer}{" "}
            </div>
            <div>
              <b>Answer Given By :</b> {data.Ansuser}
            </div>
          </ConditionalWrapper>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(content) {

  //HTML is generated at server then send to client-side
  const slug = content.query.id;
  // Fetch data from external API
  const res = await fetch(
    `api/${slug}`
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
