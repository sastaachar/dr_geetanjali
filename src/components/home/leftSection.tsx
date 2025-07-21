import { Horizontal, Vertical } from "@cute-style/container";
import styles from "./home.module.scss";
import { Reviews } from "@components/reviews";
import { t } from "@translation";
import { SimpleButton } from "@cute-style/button/simpleButton";
import Image from "next/image";

export const LeftSection = () => {
  return (
    <Vertical
      className={styles.leftSection}
      alignItem="start"
      justifyContent="space-between"
    >
      {/* Home heading content */}
      <Vertical
        className={styles.heading}
        alignItem="start"
        justifyContent="center"
      >
        <p>{t("MAIN_HEADING_LINE_1")} </p>
        <p> {t("MAIN_HEADING_LINE_2")}</p>
      </Vertical>
      <Horizontal className={styles.mainContent}>
        <span>{t("MAIN_CONTENT_1.1")}</span>
        <span>{t("MAIN_CONTENT_1.2")}</span>
        <span>{t("MAIN_CONTENT_1.3")}</span>
        <span>{t("MAIN_CONTENT_1.4")}</span>
      </Horizontal>
      <SimpleButton>{t("BOOK_APPOINTMENT")}</SimpleButton>
      <Reviews />
      <Vertical className={styles.leftSectionBgImage}>
        <img alt={t("MAIN_IMG_ALT")} src={"./my2.webp"} />
      </Vertical>
    </Vertical>
  );
};
