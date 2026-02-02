import styles from "./SignupForm.module.scss";

export default function SignupForm({ onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Enter email address"
        className={styles.form__input}
      />
      <button className={styles.form__button}>Sign up now</button>
    </form>
  );
}
