"use client";

import React, { useState } from "react";
import neuraLogo from "../assets/neura-logo.png";
import mitLogo from "../assets/manipal-logo.png";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={neuraLogo} alt="Neura AI" className={styles.logo} />
      </div>

      {/* Hamburger icon for mobile */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Nav links */}
      <div className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <a href="/">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/events">EVENTS</a>
        <a href="/contact">CONTACT US</a>
      </div>

      <img src={mitLogo} alt="MIT" className={styles.mitLogo} />
    </nav>
  );
};

export default Navbar;
