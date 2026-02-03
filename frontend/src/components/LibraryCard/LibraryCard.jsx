import styles from "./LibraryCard.module.scss";
import { ironPdfImg } from "@/assets";
import Badge from "../Badge/Badge";

export default function LibraryCard({ tech }) {
  return (
    <div className={styles.card}>
      <Badge />
      <div className={styles.card__description}>
        <img className={styles.card__img} src={ironPdfImg} alt="" />
        <p className={styles.card__pretext}>for {tech}</p>
      </div>
    </div>
  );
}
