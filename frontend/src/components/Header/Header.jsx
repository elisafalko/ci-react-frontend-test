import { useState } from "react";

import { useApi } from "@/hooks/useApi";
import styles from "./Header.module.scss";
import { headerLogo, chevronDown } from "@/assets";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, loading, error } = useApi("/api/items");

  if (error) return null;

  if (loading || !data) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={headerLogo} alt={data.header_logo} />
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
            {data.link_text_01}
            <img
              className="dropdown__icon"
              src={chevronDown}
              alt={data.link_text_01}
            />
          </button>

          <div className="dropdown__menu">
            {data.links.map(link => (
              <a
                key={link.id}
                href="#"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <a className={styles.header__link} href="#">
          {data.link_text_02}
        </a>
        <a className={styles.header__link} href="#">
          {data.link_text_03}
        </a>
      </nav>
    </header>
  );
}
