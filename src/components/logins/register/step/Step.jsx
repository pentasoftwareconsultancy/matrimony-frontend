import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Step.module.css";
import Profile from "../profile/Profile";
import FamilyBackground from "../familyback/Familyback";
import Education from "../education/Education";
import Horoscope from "../horoscope/Horoscope";
import { registerBrideGroom } from "./api";

const Step = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormData = {
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    dateOfBirth: "",
    city: "",
    gender: "",
    maritalStatus: "",
    noOfChildren: "",
    height: "",
    bodyType: "",
    weight: "",
    complexion: "",
    bloodGroup: "",
    smoke: false,
    drink: false,
    specialCase: "",
    educationLevel: "",
    educationField: "",
    educationDescription: "",
    occupation: "",
    occupationDescription: "",
    companyName: "",
    residencyStatus: "",
    annualIncome: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    brothers: "",
    sisters: "",
    culturalValues: "",
    aboutFamily: "",
    motherTongue: "",
    religion: "",
    timeOfBirth: "",
    cityOfBirth: "",
    isManglik: false,
    gotra: "",
    ras: "",
    gan: "",
    nadi: "",
    charan: "",
    partnerAgeFrom: "",
    partnerAgeTo: "",
    partnerEducation: "",
    partnerLocation: "",
    partnerPackage: "",
    partnerAbout: "",
    profilePhoto: null,
    panCardNumber: "",
    companyId: "",
    aadharNumber: "",
    aadharPhoto: null,
    passportNumber: "",
    socialFacebook: "",
    socialInstagram: "",
    socialLinkedIn: "",
    isApproved: false,
  };

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await registerBrideGroom(formData);
      alert("🎉 Registration successful!");
      console.log("✅ Form Data Submitted:", response);
      localStorage.removeItem("formData"); // Clear form data after successful submission
      navigate("/login");
    } catch (error) {
      console.error("❌ Submission failed:", error.message);
      alert(`❌ Submission failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, label: "Profile", component: <Profile formData={formData} setFormData={setFormData} /> },
    { id: 2, label: "Personal Details", component: <Education formData={formData} setFormData={setFormData} /> },
    { id: 3, label: "Family Background", component: <FamilyBackground formData={formData} setFormData={setFormData} /> },
    { id: 4, label: "Documents", component: <Horoscope formData={formData} setFormData={setFormData} /> },
  ];

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepBar}>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${styles.step} ${currentStep === step.id ? styles.active : ""}`}
            onClick={() => setCurrentStep(step.id)}
          >
            {currentStep === step.id ? "⭐" : "☆"} {step.label}
          </div>
        ))}
      </div>
      <div className={styles.stepContent}>
        {steps.find((step) => step.id === currentStep)?.component}
      </div>
      <div className={styles.stepActions}>
        <button 
          className={styles.previous} 
          onClick={() => setCurrentStep(currentStep - 1)} 
          disabled={currentStep === 1}
        >
          Previous
        </button>
        {currentStep === steps.length ? (
          <button 
            className={styles.submit} 
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        ) : (
          <button 
            className={styles.next} 
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;