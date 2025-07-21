import { Horizontal, Vertical } from "@cute-style/container";
import { LeftSection } from "@components/home/leftSection";
import { RightSection } from "@components/home/rightSection";
import styles from "./global.module.scss";
import { t } from "@translation";

export const ImageBackground = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.mainBgImage}
      alt={t("MAIN_IMG_ALT")}
      src={"./my2.webp"}
    />
  );
};

export default async function Page() {
  return (
    <>
      <Horizontal>
        <Vertical parts={1}>
          <LeftSection />
        </Vertical>
        <Vertical parts={1}>
          <RightSection />
        </Vertical>
      </Horizontal>
      <ImageBackground />
    </>
  );
}
