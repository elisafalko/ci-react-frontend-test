import styles from "./Hero.module.scss";
import { heroLogo } from "@/assets";
import Badge from "../Badge/Badge";
import SignupForm from "../SignupForm/SignupForm";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__description}>
          <div className="wrapper">
            <div className={styles.hero__logo}>
              <img src={heroLogo} alt="" />
            </div>
            <p className={styles.hero__subtitle}>
              Building on the success of IronPDF for .NET
            </p>
            <h1>
              Beta Software Program
              <br />
              <span>IronPDF for C++</span>
            </h1>
            <p className={styles.hero__text}>Coming soon</p>
          </div>
        </div>
        <div className={styles.hero__feedback}>
          <div className="wrapper">
            <h2>Be one of the first</h2>
            <p className={styles.hero__subtitle}>
              Sign up NOW to get early access!
            </p>
            <SignupForm
              onSubmit={() => {
                console.log("Signed up");
              }}
            />
            <div className={styles.hero__upcoming}>
              <Badge text="Coming soon" label="coming-soon" />
              <p className={styles.hero__pretext}>
                IronPDF Beta Program also coming soon for <b>Python</b> |{" "}
                <b>Node.JS</b> | <b>Java</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
