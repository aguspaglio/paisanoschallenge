import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";
import MenuMobile from "../MenuMobile";
import { ReactComponent as SunIcon } from "../../assets/svg/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/svg/moon.svg";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const ItemsNav = ({ handleClose }) => {
  return (
    <>
      <li onClick={handleClose} className={styles.navItem}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={handleClose} className={styles.navItem}>
        <a href="https://www.apaglioriti.com.ar" target="blank">
          Contact
        </a>
      </li>
      <li
        onClick={handleClose}
        className={`${styles.navItem} ${styles.btnNavSearch}`}
      >
        <Link to="/search">Search</Link>
      </li>
    </>
  );
};
const Header = ({ handleChangeTheme, themeColor }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1000) {
      setIsMobile(true);
    }
  }, []);
  return (
    <header>
      <nav className={styles.navList}>
        <ul className={styles.ulNav}>
          <li className={`${styles.navItem} ${styles.logo}`}>
            <Link to="/">
              <Logo
                className={styles.logoPaisanos}
              />
            </Link>
          </li>
          {!isMobile && <ItemsNav />}
          {isMobile && <Hamburger toggled={isOpen} toggle={setOpen} />}
        </ul>
      </nav>
      {isOpen && (
        <MenuMobile handleClose={() => setOpen(false)}>
          <ItemsNav handleClose={() => setOpen(false)} />
          <li onClick={handleChangeTheme} className={styles.navItem}>
            {themeColor === "light" ? <MoonIcon /> : <SunIcon />}
          </li>
        </MenuMobile>
      )}
    </header>
  );
};
export default Header;
