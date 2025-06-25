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
        {/* Logo */}
        <div className={styles.section}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
        </div>

        {/* Contact Info */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Address</h3>
          <div className={styles.contactInfo}>
            <p>
              <FaLocationDot className={styles.icon} />{" "}
              <span>Bussval Nagar Dyrafur Road AKOT. Dist Akola</span>
            </p>
            <p>
              <FaPhoneAlt className={styles.icon} /> <span>9421830662</span>
            </p>
            <p>
              <MdEmail className={styles.icon} />{" "}
              <span>anilraoshridhargawande@gmail.com</span>
            </p>
            <div className={styles.socialIcons}>
              <a
                href="#"
                className={`${styles.socialLink} ${styles.instagram}`}
              >
                <FaInstagram />
              </a>
              <a href="#" className={`${styles.socialLink} ${styles.facebook}`}>
                <FaFacebookF />
              </a>
              <a href="#" className={`${styles.socialLink} ${styles.twitter}`}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Navigation</h3>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/bride">Bride</Link>
            </li>
            <li>
              <Link to="/groom">Groom</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.navList}>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/member">Committee Members</Link>
            </li>
            <li>
              <Link to="/vendors">Vendors</Link>
            </li>
            <li>
              <Link to="/events">Event</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Services</h3>
          <ul className={styles.navList}>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
