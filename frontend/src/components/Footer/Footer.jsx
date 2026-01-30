import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__heading}>
        Sign up to our <span className={styles.footer__text}>Beta Program</span>
      </h2>
      <form className={styles.footer__form}>
        <input
          type="email"
          placeholder="Enter email address"
          className={styles.footer__input}
        />
        <button className={styles.footer__button}>Sign up now</button>
      </form>
    </footer>
  );
}
