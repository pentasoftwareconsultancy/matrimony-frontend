import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios: npm install axios
import styles from "./Paymentmethod.module.css";
import visaIcon from "./images/visa.png";
import mastercardIcon from "./images/mastercard.png";
import upiIcon from "./images/upi.png";
import paypalIcon from "./images/paypal.png";
import walletIcon from "./images/wallet.png";
import bankIcon from "./images/bank.png";

const Paymentmethod = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardholderName: "",
    billingAddress: "",
    saveInfo: false,
    businessPurchase: false,
    methodType: "",
    provider: "",
    accountNumber: "",
    upiId: "",
    bankName: "",
    ifscCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data for backend (removing sensitive data that shouldn't be stored)
      const paymentData = {
        ...formData,
        // In production, you should tokenize cardNumber instead of sending it raw
        accountNumber: formData.cardNumber.slice(-4), // Only send last 4 digits
        cvc: undefined, // Don't store CVC
      };

      const response = await axios.post(
        "http://localhost:8000/api/v1/payment/create",
        paymentData,
        {
          headers: {
            "Content-Type": "application/json",
            // Add authentication headers if required
            // "Authorization": `Bearer ${yourAuthToken}`
          },
        }
      );

      console.log("Payment response:", response.data);
      alert("Payment processed successfully!");
      
      // Reset form after successful submission
      setFormData({
        cardNumber: "",
        expiryDate: "",
        cvc: "",
        cardholderName: "",
        billingAddress: "",
        saveInfo: false,
        businessPurchase: false,
        methodType: "",
        provider: "",
        accountNumber: "",
        upiId: "",
        bankName: "",
        ifscCode: "",
      });

      onSubmit && onSubmit(response.data);
    } catch (err) {
      console.error("Payment error:", err);
      setError(
        err.response?.data?.message || "Failed to process payment. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const paymentMethods = [
    { value: "credit_card", label: "Credit Card", icon: visaIcon },
    { value: "debit_card", label: "Debit Card", icon: mastercardIcon },
    { value: "upi", label: "UPI", icon: upiIcon },
    { value: "wallet", label: "Wallet", icon: walletIcon },
    { value: "paypal", label: "PayPal", icon: paypalIcon },
    { value: "net_banking", label: "Net Banking", icon: bankIcon },
  ];

  return (
    <div className={styles.paymentWrapper}>
      <div className={styles.paymentContainer}>
        <h2 className={styles.title}>Secure Payment</h2>
        <div className={styles.card}>
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Payment Method Selection */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Payment Method</label>
              <select
                name="methodType"
                value={formData.methodType}
                onChange={handleChange}
                required
                className={styles.select}
                disabled={loading}
              >
                <option value="">Choose payment method</option>
                {paymentMethods.map((method) => (
                  <option key={method.value} value={method.value}>
                    {method.label}
                  </option>
                ))}
              </select>
              {formData.methodType && (
                <img
                  src={
                    paymentMethods.find(
                      (method) => method.value === formData.methodType
                    )?.icon
                  }
                  alt={`${formData.methodType} icon`}
                  className={styles.paymentIcon}
                />
              )}
            </div>

            {/* Credit/Debit Card Fields */}
            {["credit_card", "debit_card"].includes(formData.methodType) && (
              <div className={styles.paymentSection}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="•••• •••• •••• ••••"
                    maxLength="19"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Expiry</label>
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      maxLength="5"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      className={styles.inputmain}
                      disabled={loading}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      placeholder="•••"
                      maxLength="3"
                      value={formData.cvc}
                      onChange={handleChange}
                      required
                      className={styles.inputmain}
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="John Doe"
                    value={formData.cardholderName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Provider</label>
                  <input
                    type="text"
                    name="provider"
                    placeholder="Visa, Mastercard, etc."
                    value={formData.provider}
                    onChange={handleChange}
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
              </div>
            )}

            {/* UPI Fields */}
            {formData.methodType === "upi" && (
              <div className={styles.paymentSection}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>UPI ID</label>
                  <input
                    type="text"
                    name="upiId"
                    placeholder="yourname@upi"
                    value={formData.upiId}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
              </div>
            )}

            {/* Net Banking Fields */}
            {formData.methodType === "net_banking" && (
              <div className={styles.paymentSection}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Bank Name</label>
                  <input
                    type="text"
                    name="bankName"
                    placeholder="Enter bank name"
                    value={formData.bankName}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>IFSC Code</label>
                  <input
                    type="text"
                    name="ifscCode"
                    placeholder="Enter IFSC code"
                    value={formData.ifscCode}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    disabled={loading}
                  />
                </div>
              </div>
            )}

            {/* Billing Address */}
            {formData.methodType && (
              <div className={styles.formGroup}>
                <label className={styles.label}>Billing Address</label>
                <input
                  type="text"
                  name="billingAddress"
                  placeholder="Street address, city, country"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  disabled={loading}
                />
              </div>
            )}

            {/* Checkboxes */}
            {formData.methodType && (
              <div className={styles.checkboxContainer}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleChange}
                    className={styles.checkbox}
                    disabled={loading}
                  />
                  <span>Save payment information</span>
                </label>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="businessPurchase"
                    checked={formData.businessPurchase}
                    onChange={handleChange}
                    className={styles.checkbox}
                    disabled={loading}
                  />
                  <span>Business purchase</span>
                </label>
              </div>
            )}

            {/* Error Display */}
            {error && <div className={styles.errorMessage}>{error}</div>}

            <button
              type="submit"
              className={styles.submitButton}
              disabled={!formData.methodType || loading}
            >
              {loading ? "Processing..." : "Pay Securely"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Paymentmethod;