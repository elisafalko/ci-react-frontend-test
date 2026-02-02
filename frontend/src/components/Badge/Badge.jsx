import styles from "./Badge.module.scss";

export default function Badge({ label, text }) {
  return (
    <div
      className={[styles.badge, label && styles[`badge--${label}`]]
        .filter(Boolean)
        .join(" ")}
    >
      # {text}
    </div>
  );
}
