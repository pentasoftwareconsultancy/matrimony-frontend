import React, { useState } from "react";
import styles from "./Navbarmain.module.css"
import { Link } from "react-router-dom";
const Navbarmain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <header className={styles.header}>
        <div className={styles.navbar}>
          {/* Logo */}
          <div className={styles.logo}>
            {/* <img src={logo} alt="Logo" /> */}
            <a>LOGO</a>
          </div>
  
          {/* Navigation Links */}
          <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            <Link to='/'><a>Home</a></Link>
            <Link to="/about"><a >About</a></Link>
            <Link to='/bride'>Bride</Link>
            <Link to='/groom'><a>Groom</a></Link>
            
            <Link to = "/news"><a >News</a></Link>
            <Link to="/blog"><a>Blog</a></Link>
           
           <Link to="/contact"><a>Contact</a></Link> 
          </nav>
  
          {/* Log In Button */}
          <div className={styles.login}>
            <Link to="/login"> <a className={styles.loginBtn}>
              Log In
            </a></Link>
          </div>
  
          {/* Mobile Menu Toggle */}
          <div className={styles.menuToggle} onClick={toggleMenu}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
      </header>
    );
  };
  

export default Navbarmain;