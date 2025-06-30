import React, { useState } from "react";
import styles from "./Forgotpassword.module.css";
import { toast } from "react-toastify";

function ForgotPasswordModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const mockOtp = "123456"; // Replace with actual backend logic

  const handleSendOtp = () => {
    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Invalid Email");
      return;
    }
    toast.success(`OTP sent to ${email}`);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otp === mockOtp) {
      toast.success("OTP verified");
      setOtpVerified(true);
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleResetPassword = () => {
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    toast.success("Password reset successful");
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.closeBtn} onClick={onClose}>
          ✖
        </div>

        <div className={styles.modalInner}>
          {!otpVerified ? (
            <>
              <h2>Forgot Password!</h2>
              <div className={styles.underline}></div>
              <p>
                Please enter your registered email. We’ll send you a 6-digit OTP to reset your password.
              </p>

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={otpSent}
              />

              {!otpSent && (
                <button className={styles.forgotbtn} onClick={handleSendOtp}>Send OTP</button>
              )}

              {otpSent && (
                <>
                  <input
                    type="text"
                    maxLength="6"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button className={styles.forgotbtn} onClick={handleVerifyOtp}>Verify OTP</button>
                </>
              )}

              <div className={styles.backToLogin} onClick={onClose}>
                Back To Login
              </div>
            </>
          ) : (
            <>
              <h2>Reset Password</h2>
              <div className={styles.underline}></div>
              <p>Set your new password</p>

              <input type="email" value={email} readOnly />

              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button className={styles.forgotbtn} onClick={handleResetPassword}>Reset Password</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
