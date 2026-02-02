import styles from "./WhyChoose.module.scss";
import { whyChooseLabel } from "@/assets";

export default function WhyChoose() {
  return (
    <section className={styles.whychoose}>
      <div className={`${styles.whychoose__container} wrapper`}>
        <div className={styles.whychoose__image}>
          <img src={whyChooseLabel} alt="" />
        </div>
        <div className={styles.whychoose__area}>
          <h2 className={styles.whychoose__heading}>
            Why make a <span>C++ PDF Library</span>
          </h2>
          <p className={styles.whychoose__description}>
            C++ is one of the most popular, oldest, and important programming
            languages in use, being the language of choice in low-level systems
            and network programming and other domains where performance is
            critical.
          </p>
          <p className={styles.whychoose__description}>
            The release of IronPDF for C++ will aid developers in building
            performant applications that can carry out PDF-related processing
            tasks
          </p>
        </div>
      </div>
    </section>
  );
}
