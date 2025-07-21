import { Vertical } from "@cute-style/container";
import styles from "./home.module.scss";
import { Reviews } from "@components/reviews";
import { t } from "@translation";
import { SimpleButton } from "@cute-style/button/simpleButton";

const MainContent = () => {
  return (
    <Vertical className={styles.mainContent}>
      <p>
        <span>{t("MAIN_CONTENT_1.1")} </span>
        <span className={styles.highlighted}>{t("MAIN_CONTENT_1.2")} </span>
        <span>{t("MAIN_CONTENT_1.3")} </span>
        <span className={styles.highlighted}>{t("MAIN_CONTENT_1.4")} </span>
      </p>
    </Vertical>
  );
};

const MainHeading = () => {
  return (
    <Vertical
      className={styles.heading}
      alignItem="start"
      justifyContent="center"
    >
      <p>{t("MAIN_HEADING_LINE_1")} </p>
      <p> {t("MAIN_HEADING_LINE_2")}</p>
    </Vertical>
  );
};

 
export const LeftSection = () => {
  return (
    <Vertical
      className={styles.leftSection}
      alignItem="start"
      justifyContent="space-between"
    >
      <Vertical alignItem="start" justifyContent="start">
        <MainHeading />
      </Vertical>
      <Vertical alignItem="start" justifyContent="start">
        <MainContent />
      </Vertical>
      <Vertical alignItem="start" justifyContent="start">
        <SimpleButton>{t("BOOK_APPOINTMENT")}</SimpleButton>
      </Vertical>
      <Vertical
        alignItem="start"
        justifyContent="start"
        className={styles.reviewsWrapper}
      >
        <Reviews />
      </Vertical>
    </Vertical>
  );
};
