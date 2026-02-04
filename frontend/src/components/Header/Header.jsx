import { useState } from "react";
import styles from "./Header.module.scss";
import { headerLogo, chevronDown } from "@/assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={headerLogo} alt="Logo" />
      </div>
      <nav className={styles.header__nav}>
        <div
          className={`dropdown ${isOpen ? "dropdown--open" : ""}`}
        >
          <button
            className="dropdown__trigger"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
          >
            Products
            <img
              className="dropdown__icon"
              src={chevronDown}
              alt=""
            />
          </button>

          <div className="dropdown__menu">
            <a href="#">IronPDF</a>
            <a href="#">IronOCR</a>
            <a href="#">IronXL</a>
          </div>
        </div>

        <a className={styles.header__link} href="#">
          About us
        </a>
        <a className={styles.header__link} href="#">
          Career
        </a>
      </nav>
    </header>
  );
}
