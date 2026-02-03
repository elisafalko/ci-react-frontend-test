import LibraryCard from "../LibraryCard/LibraryCard";
import styles from "./EarlyAccess.module.scss";

export default function EarlyAccess() {
  return (
    <div className={styles.early_access}>
      <div className="wrapper">
        <h2>
          Early Access to <span>C++ PDF Library</span>
        </h2>
        <p className={styles.early_access__text}>
          Joining the early access program will allow you to collaborate closely
          with our engineering team. You will be playing a key role in the
          development process as you share your early experiences using the C++
          PDF library before its official launch. Your continual feedback after
          we release the library will be immensely helpful as we release new
          features and improve on existing features.
        </p>
        <div className={styles.early_access__cards}>
          <LibraryCard tech="Java" />
          <LibraryCard tech="Python" />
          <LibraryCard tech="NodeJS" />
        </div>
      </div>
    </div>
  );
}
