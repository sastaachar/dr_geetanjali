/* eslint-disable @next/next/no-img-element */
import { Horizontal, Vertical } from "@cute-style/container";
import { t } from "@translation";
import styles from "./page.module.scss";
import { Reviews } from "@components/reviews";

const MainHomeImg = () => {
  return (
    <Vertical className={styles.mainImgContainer}>
      <img
        alt={t("MAIN_IMG_ALT")}
        src={"/my2.webp"}
        className={styles.mainImg}
        draggable={false}
      />
    </Vertical>
  );
};

export default function Home() {
  const LeftSection = () => {
    return (
      <Vertical className={styles.leftSection} alignItem="start">
        <Vertical
          className={styles.heading}
          alignItem="start"
          justifyContent="center"
        >
          <p>{t("MAIN_HEADING_LINE_1")} </p>
          <p> {t("MAIN_HEADING_LINE_2")}</p>
        </Vertical>

        <Vertical className={styles.mainContent}>{t("MAIN_CONTENT")}</Vertical>

        <Vertical alignItem="start">
          <button className={styles.actionButton}>
            {t("BOOK_APPOINTMENT")}
          </button>
        </Vertical>
        <Horizontal>
          <Reviews />
        </Horizontal>
      </Vertical>
    );
  };

  return (
    <Horizontal>
      <Vertical>
        <LeftSection />
      </Vertical>
      <Vertical>
        <MainHomeImg />
      </Vertical>
    </Horizontal>
  );
}
