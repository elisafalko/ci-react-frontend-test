import styles from "./Header.module.scss";
import { headerLogo } from "@/assets";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={headerLogo} alt="" />
      </div>
      <nav className={styles.header__nav}>
        <a className={styles.header__link} href="#">
          Products
        </a>
        <a className={styles.header__link} href="#">
          About us
        </a>
        <a className={styles.header__link} href="#">
          Careers
        </a>
      </nav>
    </header>
  );
}
