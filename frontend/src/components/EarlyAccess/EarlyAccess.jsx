import { useApi } from "@/hooks/useApi";
import LibraryCard from "../LibraryCard/LibraryCard";
import styles from "./EarlyAccess.module.scss";

export default function EarlyAccess() {
  const { data, loading, error } = useApi("/api/early-access");

  if (error) return null;

  if (loading || !data) {
    return null;
  }

  return (
    <section className={styles.earlyAccess}>
      <div className="wrapper">
        <h2>
          {`${data.title} `}
          <span>{data.title_pretext}</span>
        </h2>
        <p className={styles.earlyAccess__text}>
          {data.description}
        </p>
        <div className={styles.earlyAccess__cards}>
          {data.libraries.map(lib => (
            <LibraryCard
              key={lib.id}
              tech={lib.tech}
              label={lib.label}
              text={lib.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
