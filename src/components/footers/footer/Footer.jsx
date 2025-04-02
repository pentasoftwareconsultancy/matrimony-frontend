// Footer.jsx (unchanged from previous version, just for reference)
import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import logo from "./abks logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Navigation</h3>
          <ul className={styles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bride">Bride</Link></li>
            <li><Link to="/groom">Groom</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.navList}>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/member">Committee Members</Link></li>
            <li><Link to="/vendors">Vendors</Link></li>
            <li><Link to="/events">Event</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Services</h3>
          <ul className={styles.navList}>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.contactInfo}>
          <p><FaLocationDot /> 2022 Grance Template - All Rights Reserved</p>
          <p><FaPhoneAlt /> 5768797999</p>
          <p><MdEmail /> nexuxctc2020@gmail.com</p>
        </div>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialLink}><FaInstagram /></a>
          <a href="#" className={styles.socialLink}><FaFacebookF /></a>
          <a href="#" className={styles.socialLink}><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;