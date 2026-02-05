import styles from "./IronPdf.module.scss";
import { ironPdfBadge } from "@/assets";

export default function IronPdf() {
  return (
    <section className={styles.ironPdf}>
      <div className={styles.ironPdf__advantages}>
        <div className="wrapper">
          <div className={styles.ironPdf__badgeWrapper}>
            <h2>IronPDF for C++</h2>
            <img
              className={styles.ironPdf__badge}
              src={ironPdfBadge}
              alt="Coming soon"
            />
          </div>
          <ul className={styles.ironPdf__list}>
            <li className={styles.ironPdf__item}><b>#</b> Generate PDFs from HTML in C++</li>
            <li className={styles.ironPdf__item}><b>#</b> Combine, split, and modify PDFs quickly in C++</li>
            <li className={styles.ironPdf__item}><b>#</b> Extract text and images from PDFs using C++</li>
          </ul>
        </div>
      </div>
      <div className={styles.ironPdf__text}>
        <div className="wrapper">
          <p className={styles.ironPdf__infoText}>
            The new{" "}
            <span className={styles.ironPdf__pretext}>
              IronPDF library for C++
            </span>{" "}
            will enhance the C++ developer’s tool set with robust PDF generation
            and conversion capabilities. Developers will be able to generate new
            PDFs from HTML content (from text or from URL), as well as to
            combine, split, extract, and modify content from existing PDFs.
          </p>
          <p className={styles.ironPdf__infoText}>
            <span className={styles.ironPdf__pretext}>IronPDF for C++</span>{" "}
            will help developers create C++ applications that can do all of
            these PDF processing tasks and more, with speed, precision, control,
            and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
