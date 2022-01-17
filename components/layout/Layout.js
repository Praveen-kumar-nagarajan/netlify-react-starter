import Head from "next/head";
import styles from "./Layout.module.css";

import Header from "../header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Frontend Developer - Praveen Kumar Nagarajan!</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Alice&family=Montserrat:ital,wght@0,500;0,600;1,500&family=Roboto:wght@300&family=Space+Grotesk&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={styles.main}>
        <Header />
        {children}
      </main>
    </>
  );
}
