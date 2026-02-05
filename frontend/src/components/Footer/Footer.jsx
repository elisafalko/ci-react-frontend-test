import styles from "./Footer.module.scss";
import SignupForm from "../SignupForm/SignupForm";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <h2 className={styles.footer__heading}>
          Sign up to our <span className={styles.footer__text}>Beta Program</span>
        </h2>
        <SignupForm onSubmit={() => console.log("Footer")} />
      </div>
    </footer>
  );
}
