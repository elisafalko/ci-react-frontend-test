import styles from "./LibraryCard.module.scss";
import { ironPdfImg } from "@/assets";
import Badge from "../Badge/Badge";

export default function LibraryCard({ tech, label, text }) {
  return (
    <div className={styles.card}>
      <Badge label={label} text={text} />
      <div className={styles.card__description}>
        <img className={styles.card__img} src={ironPdfImg} alt="Coming soon" />
        <p className={styles.card__pretext}>for {tech}</p>
      </div>
    </div>
  );
}
