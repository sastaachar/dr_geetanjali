/* eslint-disable @next/next/no-img-element */
import { Horizontal, Vertical } from "@cute-style/container";
import { t } from "@translation";
import styles from "./global.module.scss";
import { LeftSection } from "@components/home/leftSection";
import { RightSection } from "@components/home/rightSection";

export default async function Page() {
  return (
    <Horizontal>
      <LeftSection />
      <RightSection />
    </Horizontal>
  );
}
