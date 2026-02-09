import { useApi } from "@/hooks/useApi";
import styles from "./Footer.module.scss";
import SignupForm from "../SignupForm/SignupForm";

export default function Footer() {
  const { data, loading, error } = useApi("/api/items");

  if (error) return null;

  if (loading || !data) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <h2 className={styles.footer__heading}>
          {`${data.footer_text} `} <span className={styles.footer__text}>{data.footer_pretext}</span>
        </h2>
        <div className={styles.footer__center}>
          <SignupForm onSubmit={() => console.log("Footer")} />
        </div>
      </div>
    </footer>
  );
}
