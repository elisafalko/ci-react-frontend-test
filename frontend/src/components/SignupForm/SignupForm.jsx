import styles from "./SignupForm.module.scss";
import { chevronDown } from "@/assets";

export default function SignupForm({ onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Enter email address"
        className={styles.form__input}
      />
      <button className={styles.form__button}>
        Sign up now
        <img
          className="dropdown__icon dropdown__icon--rotate"
          src={chevronDown}
          alt=""
        />
      </button>
    </form>
  );
}
