import Link from "next/link";
import { Logo } from "./logo";
import { configs } from "../../app/config";
import { t } from "@translation";
import { Horizontal } from "@cute-style/container";
import styles from "./navbar.module.scss"

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
    <Horizontal className={styles.navLinks} > 
      <Link href={configs.navLinks.home}>{t("HOME")}</Link>
      <Link href={configs.navLinks.about}> {t("ABOUT_US")} </Link>
      <Link href={configs.navLinks.contact}>{t("CONTACT_US")}</Link>
    </Horizontal>
  );
};

export const Navbar = () => {
  return (
    <Horizontal className={styles.navbar}>
      <Logo />
      <NavLinks />
    </Horizontal>
  );
};
