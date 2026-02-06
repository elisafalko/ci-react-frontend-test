import { useApi } from "@/hooks/useApi";
import styles from "./IronPdf.module.scss";
import { ironPdfBadge } from "@/assets";

export default function IronPdf() {
  const { data, loading, error } = useApi("/api/iron-pdf");

  if (error) return null;

  if (loading || !data) {
    return null;
  }

  return (
    <section className={styles.ironPdf}>
      <div className={styles.ironPdf__advantages}>
        <div className="wrapper">
          <div className={styles.ironPdf__badgeWrapper}>
            <h2>{data.title}</h2>
            <img
              className={styles.ironPdf__badge}
              src={ironPdfBadge}
              alt={data.image_text}
            />
          </div>
          <ul className={styles.ironPdf__list}>
            {data.items.map(item => (
              <li
                key={item.id}
                className={styles.ironPdf__item}
              >
                <b>#</b>{` ${item.description}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.ironPdf__text}>
        <div className="wrapper">
          <p className={styles.ironPdf__infoText}>
            {`${data.info_text_01} `}
            <span className={styles.ironPdf__pretext}>
              {data.pretext_01}
            </span>
            {` ${data.info_text_02}`}
          </p>
          <p className={styles.ironPdf__infoText}>
            <span className={styles.ironPdf__pretext}>{`${data.pretext_02} `}</span>
            {data.info_text_03}
          </p>
        </div>
      </div>
    </section>
  );
}
