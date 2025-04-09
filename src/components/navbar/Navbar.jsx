import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

const Navbar = ({ isHomePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState(false); // Added for Vendors sub-dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Toggle Services dropdown on click for mobile
  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent Link navigation
    setDropdownVisible((prev) => !prev);
  };

  // Toggle Vendors sub-dropdown on click for mobile
  const toggleSubDropdown = (e) => {
    e.preventDefault(); // Prevent Link navigation
    setSubDropdownVisible((prev) => !prev);
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

        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
          onClick={menuOpen ? closeMenu : null}
        >
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
            onMouseEnter={() => window.innerWidth > 768 && setDropdownVisible(true)} // Hover for desktop
            onMouseLeave={() => window.innerWidth > 768 && setDropdownVisible(false)} // Hover for desktop
            onClick={window.innerWidth <= 768 ? toggleDropdown : null} // Click for mobile
          >
            <Link
              to="#"
              className={`${isHomePage ? styles.whiteText : styles.blackText} ${styles.dropdownToggle}`}
            >
              Services
            </Link>
            {(dropdownVisible || (window.innerWidth <= 768 && dropdownVisible)) && (
              <div className={styles.dropdownMenu}>
                <Link to="/events" className={isHomePage ? styles.whiteText : styles.blackText}>
                  Events
                </Link>
                <div
                  className={styles.subDropdown}
                  onMouseEnter={() => window.innerWidth > 768 && setSubDropdownVisible(true)} // Hover for desktop
                  onMouseLeave={() => window.innerWidth > 768 && setSubDropdownVisible(false)} // Hover for desktop
                  onClick={window.innerWidth <= 768 ? toggleSubDropdown : null} // Click for mobile
                >
                  <Link
                    to="/vendors"
                    className={`${isHomePage ? styles.whiteText : styles.blackText} ${styles.dropdownToggle}`}
                  >
                    Vendors
                  </Link>
                  {(subDropdownVisible || (window.innerWidth <= 768 && subDropdownVisible)) && (
                    <div className={styles.subDropdownMenu}>
                      <Link to="/photpgrapy" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Photography
                      </Link>
                      <Link to="/decoration" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Decoration
                      </Link>
                      <Link to="/vendors/dj-music" className={isHomePage ? styles.whiteText : styles.blackText}>
                        DJ & Music
                      </Link>
                      <Link to="/vendors/makeup-hair" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Makeup & Hair Styling
                      </Link>
                      <Link to="/vendors/bridal-wear" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Bridal Wear
                      </Link>
                      <Link to="/vendors/groom-wear" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Groom Wear
                      </Link>
                      <Link to="/vendors/mehndi-artists" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Mehndi Artists
                      </Link>
                      <Link to="/vendors/lighting-sound" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Lighting & Sound
                      </Link>
                      <Link to="/vendors/jewelry-accessories" className={isHomePage ? styles.whiteText : styles.blackText}>
                        Jewelry & Accessories
                      </Link>
                    </div>
                  )}
                </div>
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