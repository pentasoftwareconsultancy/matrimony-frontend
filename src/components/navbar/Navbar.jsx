import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

const Navbar = ({ isHomePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle only on button click
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar}>
        <a className={styles.logoContainer}>
          <img src={logo} className={styles.logoImage} alt="Logo" />
        </a>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link to="/" className={isHomePage ? styles.whiteText : styles.blackText}>
            Home
          </Link>
          <Link to="/about" className={isHomePage ? styles.whiteText : styles.blackText}>
            About
          </Link>
          <Link to="/bride" className={isHomePage ? styles.whiteText : styles.blackText}>
            Bride
          </Link>
          <Link to="/groommain" className={isHomePage ? styles.whiteText : styles.blackText}>
            Groom
          </Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <Link to="#" className={isHomePage ? styles.whiteText : styles.blackText}>
              Services
            </Link>
            {dropdownVisible && (
              <div className={styles.dropdownMenu}>
                <Link to="/events" className={isHomePage ? styles.whiteText : styles.blackText}>
                  Events
                </Link>
                <Link to="/vendors" className={isHomePage ? styles.whiteText : styles.blackText}>
                  Vendors
                </Link>
                <Link to="/blog" className={isHomePage ? styles.whiteText : styles.blackText}>
                  Blogs
                </Link>
              </div>
            )}
          </div>

          <Link to="/member" className={isHomePage ? styles.whiteText : styles.blackText}>
            Committee Members
          </Link>
          <Link to="/contact" className={isHomePage ? styles.whiteText : styles.blackText}>
            Contact
          </Link>
          <Link to="/pricing" className={isHomePage ? styles.whiteText : styles.blackText}>
            Price
          </Link>

          <div className={styles.loginMobile}>
            {isLoggedIn ? (
              <button onClick={handleLogout} className={isHomePage ? styles.whiteText : styles.blackText}>
                Log Out
              </button>
            ) : (
              <Link to="/login" className={isHomePage ? styles.whiteText : styles.blackText}>
                Log In
              </Link>
            )}
          </div>
        </nav>

        {/* <div className={styles.loginDesktop}>
          {isLoggedIn ? (
            <button onClick={handleLogout} className={isHomePage ? styles.whiteText : styles.blackText}>
              Log Out
            </button>
          ) : (
            <Link to="/login" className={isHomePage ? styles.whiteText : styles.blackText}>
              Log In
            </Link>
          )}
        </div> */}

        <div
          className={`${styles.menuToggle} ${isHomePage ? styles.home : ""}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;