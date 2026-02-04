import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./Layout.module.scss";
import { heroBg } from "@/assets";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <img
        className={styles.layout__decor}
        src={heroBg}
        alt="Beta Software Program IronPDF for C++"
      />
      <main className={styles.layout__main}>
        <div className={styles.layout__container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
