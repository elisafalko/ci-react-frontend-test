import { useApi } from "@/hooks/useApi";
import styles from "./WhyChoose.module.scss";
import { whyChooseLabel } from "@/assets";

export default function WhyChoose() {
  const { data, loading, error } = useApi("/api/why-choose");

  if (error) return null;

  if (loading || !data) {
    return null;
  }

  return (
    <section className={styles.whychoose}>
      <div className={`${styles.whychoose__container} wrapper`}>
        <div className={styles.whychoose__image}>
          <img src={whyChooseLabel} alt={data.image_text} />
        </div>
        <div className={styles.whychoose__area}>
          <h2 className={styles.whychoose__heading}>
            {`${data.title} `}
            <span>{data.title_pretext}</span>
          </h2>
          <p className={styles.whychoose__description}>
            {data.description_first}
          </p>
          <p className={styles.whychoose__description}>
            {data.description_second}
          </p>
        </div>
      </div>
    </section>
  );
}
