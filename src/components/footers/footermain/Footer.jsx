import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import logo from "./abks logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          
            <img src={logo} alt="Logo" className={styles.logoImage} />
{/*           
          <p>
            Find your perfect match with us – where love meets destiny. Explore
            a world of trusted connections and meaningful relationships. Your
            journey to forever begins here, with us by your side every step of
            the way.
          </p> */}
        </div>

        <div className={styles.section}>
          <h3 className={styles.links}>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/bride"> Bride</Link></li>
            <li><Link to="/groom"> Groom</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.linking}>Quick Links</h3>
          <ul>
            <li className="newli"><Link to="/contact">Contact Us</Link></li>
            <li className="newli"><Link to="/member">Committee Members</Link></li>
            <li className="newli"><Link to="/vendors">Vendors</Link></li>
            <li className="newli"><Link to="/events">Event</Link></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.links}>Services</h3>
          <ul>
            {/* <li>News</li>
            <li>Contact</li> */}
            <li><Link to="/blog">Blog</Link></li>
            <li> <Link to="/login">Login</Link> </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottommain}>
        <p className={styles.text}>
          {" "}
          <FaLocationDot />: 2022 Grance Template - All Rights Reserved
        </p>
        <p className={styles.phone}>
          <FaPhoneAlt /> : 5768797999
        </p>
        <p className={styles.email}>
          <MdEmail className={styles.mainicon} /> : nexuxctc2020@gmail.com
        </p>
        <div className={styles.icons}>
          <span className={styles.iconinsta}>
            <FaInstagram />
          </span>
          <span className={styles.iconFaFacebook}>
            <LiaFacebook />
          </span>
          <span className={styles.icontwitter}>
            <FaXTwitter />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
