import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";
import img from "../image/logo2.webp";
import { Link } from "react-router-dom";
import logos from "../../navbar/logo.png";

function Login() {
  const navigate = useNavigate();
  const [mobileOrEmail, setMobileOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [typingTimer, setTypingTimer] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (mobileOrEmail) {
      if (typingTimer) clearTimeout(typingTimer);
      setTypingTimer(setTimeout(() => validateEmail(mobileOrEmail), 1000));
    }
    return () => clearTimeout(typingTimer);
  }, [mobileOrEmail]);

  useEffect(() => {
    if (password) {
      if (typingTimer) clearTimeout(typingTimer);
      setTypingTimer(setTimeout(() => validatePassword(password), 3000));
    }
    return () => clearTimeout(typingTimer);
  }, [password]);

  const validateEmail = (value) => {
    if (!value.includes("@")) {
      toast.dismiss();
      toast.error("❌ Email must contain '@'.");
      return false;
    } else if (!value.includes(".")) {
      toast.dismiss();
      toast.error("❌ Invalid email format. Missing '.'");
      return false;
    }
    return true;
  };

  const validatePassword = (value) => {
    if (value.length < 6) {
      toast.dismiss();
      toast.error("❌ Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!validateEmail(mobileOrEmail) || !validatePassword(password)) {
      return;
    }
  
    const storedUserData = JSON.parse(localStorage.getItem("formData"));
  
    if (!storedUserData) {
      toast.dismiss();
      toast.warn("⚠️ No registered user found. Please register first.");
      return;
    }
  
    const isValidUser =
      (storedUserData.email === mobileOrEmail || storedUserData.mobileNumber === mobileOrEmail) &&
      storedUserData.password === password;
  
    if (!isValidUser) {
      toast.dismiss();
      toast.error("❌ Invalid email/mobile number or password.");
      return;
    }
  
    toast.success("🎉 Login successful!");
  
    // Store login state in localStorage
    localStorage.setItem("isLoggedIn", "true");
  
    setTimeout(() => navigate("/"), 2000);
  };
  
  return (
    <div className={styles.mainlogin}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick />
      <div className={styles.cantainars1}></div>
      <div className={styles.cantainars2}>
        <div className={styles.login}>
          <h1 className={styles.logos}>
            <img className={styles.logoimage} src={logos} alt="Main Logo" />
          </h1>
          <form className={styles.mainform} onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Mobile Number/Email"
              value={mobileOrEmail}
              onChange={(e) => setMobileOrEmail(e.target.value)}
              required
            />
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className={styles.toggle} onClick={togglePasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <button type="submit">Login</button>
            <div className={styles.forgotPassword}>
              <a href="/">Forgot Password?</a>
            </div>
            <div className={styles.register}>
              <span>New User?</span><p>
              <Link to="/register">Register Free</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
