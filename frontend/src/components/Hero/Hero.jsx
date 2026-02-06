import { useApi } from "@/hooks/useApi";
import styles from "./Hero.module.scss";
import { heroLogo } from "@/assets";
import Badge from "../Badge/Badge";
import SignupForm from "../SignupForm/SignupForm";

export default function Hero() {
  const { data, loading, error } = useApi("/api/hero");

  if (error) return null;

  if (loading || !data) {
    return null;
  }

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__description}>
          <div className="wrapper">
            <div className={styles.hero__logo}>
              <img src={heroLogo} alt={data.image_text} />
            </div>
            <p className={styles.hero__subtitle}>
              {data.subtitle_text}
            </p>
            <h1>
              {data.title}
              <br />
              <span>{data.title_pretext}</span>
            </h1>
            <p className={styles.hero__text}>{data.text_01}</p>
          </div>
        </div>
        <div className={styles.hero__feedback}>
          <div className="wrapper">
            <h2>{data.heading}</h2>
            <p className={styles.hero__subtitle}>
              {data.text_02}
            </p>
            <SignupForm
              onSubmit={() => {
                console.log("Signed up");
              }}
            />
            <div className={styles.hero__upcoming}>
              <Badge text={data.text_01} label="coming-soon" />
              <p className={styles.hero__pretext}>
                {`${data.text_03} `} <b>{data.text_04}</b> |{" "} <b>{data.text_05}</b> | <b>{data.text_06}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
