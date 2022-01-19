import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          <div className={styles.caption}> Built with 💜 React & Next.js </div>
          <a className={styles.caption} href="https://storyset.com/people">
            People illustrations by Storyset
          </a>
          <div className={styles.copyright}> 2️⃣0️⃣2️⃣2️⃣ © 🇵🇰 </div>
        </div>
      </footer>
    </>
  );
}
