import Head from "next/head";
import styles from "./Layout.module.css";

import Header from "../header/Header";
import Footer from "@components/footer/Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Frontend Developer - Praveen Kumar Nagarajan!</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Alice&family=Montserrat:ital,wght@0,500;0,600;1,500&family=Roboto:wght@300&family=Space+Grotesk&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
}
