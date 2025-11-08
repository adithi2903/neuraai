"use client";

import React from "react";
import aiHead from "../assets/aihead.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import EventSlideshow from "./EventSlideshow"; // import the slideshow
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroText} data-aos="fade-right">
          <h1 className={styles.title}>
            THE ARTIFICIAL <br /> INTELLIGENCE <br /> CLUB
          </h1>
          <p className={styles.subtitle}>
            We are MIT’s official Artificial Intelligence club. From hands-on
            workshops to national-level hackathons, we provide a platform for
            students to explore and innovate in the field of AI and beyond.
          </p>
        </div>

        <div className={styles.heroImage} data-aos="fade-left">
          <img src={aiHead} alt="AI Head" className={styles.image} />
          <div className={styles.socials}>
            <a
              href="https://instagram.com/neura.mitblr"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.instagram}`}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/neura-ai"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialIcon} ${styles.linkedin}`}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="eventSlideshow">
  <EventSlideshow />
</div>
    </div>
  );
};

export default Home;
