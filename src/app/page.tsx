/* eslint-disable @next/next/no-img-element */
import { Horizontal, Vertical } from "@cute-style/container";
import { t } from "@translation";
import styles from "./page.module.scss";
import Image from "next/image";
import image from "@public/my2.webp";

const MainHomeImg = () => {
  return (
    <Vertical>
      <img
        alt={t("MAIN_IMG_ALT")}
        src={"/og.png"}
        className={styles.mainImg}
        draggable={false}
        style={{
          maxHeight: "100%",
          maxWidth: "auto",
        }}
      />
    </Vertical>
  );
};

export default function Home() {
  return (
    <Vertical
      style={{
        backgroundColor: "$primary-bg",
      }}
    >
      <Horizontal>
        <Vertical>left</Vertical>
        <Vertical>
          <MainHomeImg />
        </Vertical>
      </Horizontal>
    </Vertical>
  );
}
