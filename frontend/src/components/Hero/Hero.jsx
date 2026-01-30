import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Beta Software Program
        <span>IronPDF for C++</span>
      </h1>

      <p className={styles.subtitle}>Be one of the first</p>

      <form className={styles.form}>
        <input
          type="email"
          placeholder="Enter email address"
          className={styles.input}
        />
        <button className={styles.button}>Sign up now</button>
      </form>
    </section>
  );
}
