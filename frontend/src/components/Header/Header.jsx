import styles from "./Header.module.scss";
import { headerLogo } from "@/assets";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={headerLogo} alt="" />
      </div>
      <nav className={styles.nav}>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Careers</a>
      </nav>
    </header>
  );
}
