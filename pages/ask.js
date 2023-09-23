import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Ask.module.css";
import Footer from "../components/footer";
import NavBar from "../components/main-navigation";
import { API } from "./api/apis";

export default function Ask() {
  const sendMessage = async (event) => {
    event.preventDefault();

    const res = await fetch(
      API.ASK_QUESTION,
      {
        body: JSON.stringify({
          Quser: event.target.Quser.value,
          Qdetail: event.target.Qdetail.value,
          Question: event.target.Question.value,
          mail: event.target.mail.value,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Origin": "*",
        },
        method: "POST",
      }
    );

    const result = await res.json();
    console.log(result);
    alert("Done !!!");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ask</title>
        <meta name="description" content="Ask Question" />
        <link rel="icon" href="/qada.png" />
      </Head>

      <NavBar />
      <div className={styles.grid}>
        <form onSubmit={sendMessage}>
            <h1 className={styles.h1text}>Create Question</h1>
          <label htmlFor="Quser">User Name: </label>
          <input
            className={styles.input_box}
            id="Quser"
            name="Quser"
            type="text"
            autoComplete="from"
            required
          />
          <label htmlFor="mail">EMail : </label>
          <input
            className={styles.input_box}
            id="mail"
            name="mail"
            type="text"
            autoComplete="from"
            required
          />

          <label htmlFor="Question">Question: </label>
          <input
            className={styles.input_box}
            id="Question"
            name="Question"
            type="text"
            autoComplete="from"
            required
          />
          <label htmlFor="Quetion_details">Quetion details: </label>
          <textarea
            className={styles.text_box}
            id="Qdetail"
            name="Qdetail"
            type="text"
            autoComplete="from"
            required
          />

          <button type="submit" className={styles.subbtn}>
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
