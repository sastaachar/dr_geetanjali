import Link from "next/link";
import { configs } from "../../app/config";
import { t } from "@translation";
import { Horizontal, Vertical } from "@cute-style/container";
import styles from "./navbar.module.scss";

const Logo = () => {
  return <h1 className={styles.navbarLogo}>{t("LOGO_MAIN")}</h1>;
};

export const MobileNavbar = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};

export const DesktopNavbar = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};

const NavLinks = () => {
  return (
    <Horizontal className={styles.navLinks} justifyContent="space-between">
      <Link href={configs.navLinks.home}>{t("HOME")}</Link>
      <Link href={configs.navLinks.about}> {t("ABOUT_US")} </Link>
      <Link href={configs.navLinks.contact}>{t("CONTACT_US")}</Link>
    </Horizontal>
  );
};

export const Navbar = () => {
  return (
    <Horizontal className={styles.navbar}>
      <Vertical parts={1}>
        <Horizontal justifyContent="start">
          <Logo />
        </Horizontal>
      </Vertical>
      <Vertical parts={1}>
        <NavLinks />
      </Vertical>
    </Horizontal>
  );
};
