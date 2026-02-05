import LibraryCard from "../LibraryCard/LibraryCard";
import styles from "./EarlyAccess.module.scss";

export default function EarlyAccess() {
  return (
    <div className={styles.earlyAccess}>
      <div className="wrapper">
        <h2>
          Early Access to <span>C++ PDF Library</span>
        </h2>
        <p className={styles.earlyAccess__text}>
          Joining the early access program will allow you to collaborate closely
          with our engineering team. You will be playing a key role in the
          development process as you share your early experiences using the C++
          PDF library before its official launch. Your continual feedback after
          we release the library will be immensely helpful as we release new
          features and improve on existing features.
        </p>
        <div className={styles.earlyAccess__cards}>
          <LibraryCard tech="Java" label="Released" text="Released" />
          <LibraryCard tech="Python" label="coming-soon-v2" text="Coming soon" />
          <LibraryCard tech="NodeJS" label="coming-soon-v2" text="Coming soon" />
        </div>
      </div>
    </div>
  );
}
