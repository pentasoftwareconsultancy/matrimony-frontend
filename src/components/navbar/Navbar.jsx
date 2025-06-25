import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Updated to NavLink
import styles from "./Navbar.module.css";
import logo from "./logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ isHomePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subDropdownVisible, setSubDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible((prev) => !prev);
  };

  const toggleSubDropdown = (e) => {
    e.preventDefault();
    setSubDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  const getLinkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.active : ""}`;

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        isHomePage ? styles.home : ""
      }`}
    >
      <div className={styles.navbar}>
        <a className={styles.logoContainer}>
          <img src={logo} className={styles.logoImage} alt="Logo" />
        </a>

        <nav
          className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
          onClick={menuOpen ? closeMenu : null}
        >
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
          <NavLink to="/bride" className={getLinkClass}>
            Bride
          </NavLink>
          <NavLink to="/groommain" className={getLinkClass}>
            Groom
          </NavLink>

          <div
            className={styles.dropdown}
            onMouseEnter={() =>
              window.innerWidth > 768 && setDropdownVisible(true)
            }
            onMouseLeave={() =>
              window.innerWidth > 768 && setDropdownVisible(false)
            }
            onClick={window.innerWidth <= 768 ? toggleDropdown : null}
          >
            <NavLink to="#" className={styles.dropdownToggle}>
              Services
            </NavLink>
            {(dropdownVisible ||
              (window.innerWidth <= 768 && dropdownVisible)) && (
              <div className={styles.dropdownMenu}>
                <NavLink to="/events" className={getLinkClass}>
                  Events
                </NavLink>
                <div
                  className={styles.subDropdown}
                  onMouseEnter={() =>
                    window.innerWidth > 768 && setSubDropdownVisible(true)
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 768 && setSubDropdownVisible(false)
                  }
                  onClick={
                    window.innerWidth <= 768 ? toggleSubDropdown : null
                  }
                >
                  <NavLink to="#" className={styles.dropdownToggle}>
                    Vendors
                  </NavLink>
                  {(subDropdownVisible ||
                    (window.innerWidth <= 768 && subDropdownVisible)) && (
                    <div className={styles.subDropdownMenu}>
                      <NavLink to="/photpgrapy" className={getLinkClass}>
                        Photography
                      </NavLink>
                      <NavLink to="/decoration" className={getLinkClass}>
                        Decoration
                      </NavLink>
                      <NavLink to="/djmusic" className={getLinkClass}>
                        DJ & Music
                      </NavLink>
                      <NavLink to="/makeuphair" className={getLinkClass}>
                        Makeup & Hair Styling
                      </NavLink>
                      <NavLink to="/bridalwear" className={getLinkClass}>
                        Bridal Wear
                      </NavLink>
                      <NavLink to="/groomwear" className={getLinkClass}>
                        Groom Wear
                      </NavLink>
                      <NavLink to="/makeupartist" className={getLinkClass}>
                        Mehndi Artists
                      </NavLink>
                      <NavLink to="/lightingsound" className={getLinkClass}>
                        Lighting & Sound
                      </NavLink>
                      <NavLink to="/jewelry" className={getLinkClass}>
                        Jewellery & Accessories
                      </NavLink>
                    </div>
                  )}
                </div>
                <NavLink to="/blog" className={getLinkClass}>
                  Blogs
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/member" className={getLinkClass}>
            Committee Members
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/pricing" className={getLinkClass}>
            Plan
          </NavLink>

          <div className={styles.loginMobile}>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Log Out</button>
            ) : (
              <NavLink to="/login" className={getLinkClass}>
                Log In
              </NavLink>
            )}
          </div>
        </nav>

        <div
          className={`${styles.menuToggle} ${isHomePage ? styles.home : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FaTimes className={styles.icon} />
          ) : (
            <FaBars className={styles.icon} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
