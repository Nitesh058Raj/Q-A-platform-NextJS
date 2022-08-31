import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.contain}>
      <h1 className={styles.h1text}>Created By Nitesh</h1>
      <p className={styles.p}>05niteshraj@gmail.com</p>
    </div>
  );
}
