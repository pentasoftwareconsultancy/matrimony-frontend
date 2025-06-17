import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

const Navbar = ({ isHomePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible((prev) => !prev);
  };

  const toggleSubDropdown = (e) => {
    e.preventDefault();
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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isHomePage ? styles.home : ""}`}>
      <div className={styles.navbar}>
        <a className={styles.logoContainer}>
          <img src={logo} className={styles.logoImage} alt="Logo" />
        </a>

        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
          onClick={menuOpen ? closeMenu : null}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/bride">Bride</Link>
          <Link to="/groommain">Groom</Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => window.innerWidth > 768 && setDropdownVisible(true)}
            onMouseLeave={() => window.innerWidth > 768 && setDropdownVisible(false)}
            onClick={window.innerWidth <= 768 ? toggleDropdown : null}
          >
            <Link to="#" className={styles.dropdownToggle}>
              Services
            </Link>
            {(dropdownVisible || (window.innerWidth <= 768 && dropdownVisible)) && (
              <div className={styles.dropdownMenu}>
                <Link to="/events">Events</Link>
                <div
                  className={styles.subDropdown}
                  onMouseEnter={() => window.innerWidth > 768 && setSubDropdownVisible(true)}
                  onMouseLeave={() => window.innerWidth > 768 && setSubDropdownVisible(false)}
                  onClick={window.innerWidth <= 768 ? toggleSubDropdown : null}
                >
                  <Link to="#" className={styles.dropdownToggle}>
                    Vendors
                  </Link>
                  {(subDropdownVisible || (window.innerWidth <= 768 && subDropdownVisible)) && (
                    <div className={styles.subDropdownMenu}>
                      <Link to="/photpgrapy">Photography</Link>
                      <Link to="/decoration">Decoration</Link>
                      <Link to="/djmusic">DJ & Music</Link>
                      <Link to="/makeuphair">Makeup & Hair Styling</Link>
                      <Link to="/bridalwear">Bridal Wear</Link>
                      <Link to="/groomwear">Groom Wear</Link>
                      <Link to="/makeupartist">Mehndi Artists</Link>
                      <Link to="/lightingsound">Lighting & Sound</Link>
                      <Link to="/jewelry">Jewelry & Accessories</Link>
                    </div>
                  )}
                </div>
                <Link to="/blog">Blogs</Link>
              </div>
            )}
          </div>

          <Link to="/member">Committee Members</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/pricing">Price</Link>

          <div className={styles.loginMobile}>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Log Out</button>
            ) : (
              <Link to="/login">Log In</Link>
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