import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Groombiodata.module.css";

const ProfileComponent = () => {
  const { id } = useParams(); // Get the profile ID from the route
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the profile data by ID
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/bride-groom/${id}` // Adjust the API URL
        );
        const data = await response.json();
        if (data.success) {
          setProfile(data.data);
        } else {
          setError(data.message || "Failed to fetch profile.");
        }
      } catch (err) {
        setError("Error fetching profile: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.header}>
        <h1>{profile.fullName}</h1>
      </div>

      {/* Profile Main Content */}
      <div className={styles.main}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <img
            src={
              profile.profilePhoto || "https://via.placeholder.com/150"
            }
            alt="Profile"
            className={styles.profileImage}
          />
        </div>

        {/* Personal Details Section */}
        <div className={styles.detailsSection}>
          <h2>Personal Details</h2>
          <p><strong>Full Name:</strong> {profile.fullName}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Mobile Number:</strong> {profile.mobileNumber}</p>
          <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
          <p><strong>City:</strong> {profile.city}</p>
          <p><strong>Gender:</strong> {profile.gender}</p>
          <p><strong>Height:</strong> {profile.height}</p>
          <p><strong>Weight:</strong> {profile.weight}</p>
          <p><strong>Body Type:</strong> {profile.bodyType}</p>
          <p><strong>Complexion:</strong> {profile.complexion}</p>
          <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
          <p><strong>Smoke:</strong> {profile.smoke ? "Yes" : "No"}</p>
          <p><strong>Drink:</strong> {profile.drink ? "Yes" : "No"}</p>
          <p><strong>Special Case:</strong> {profile.specialCase}</p>
        </div>

        {/* Education and Career Section */}
        <div className={styles.educationSection}>
          <h2>Education and Career</h2>
          <p><strong>Education Level:</strong> {profile.educationLevel}</p>
          <p><strong>Field:</strong> {profile.educationField}</p>
          <p><strong>Description:</strong> {profile.educationDescription}</p>
          <p><strong>Occupation:</strong> {profile.occupation}</p>
          <p><strong>Company Name:</strong> {profile.companyName}</p>
          <p><strong>Residency Status:</strong> {profile.residencyStatus}</p>
          <p><strong>Annual Income:</strong> {profile.annualIncome}</p>
        </div>

        {/* Family Information Section */}
        <div className={styles.familySection}>
          <h2>Family Information</h2>
          <p><strong>Father's Name:</strong> {profile.fatherName}</p>
          <p><strong>Father's Occupation:</strong> {profile.fatherOccupation}</p>
          <p><strong>Mother's Name:</strong> {profile.motherName}</p>
          <p><strong>Mother's Occupation:</strong> {profile.motherOccupation}</p>
          <p><strong>Brothers:</strong> {profile.brothers}</p>
          <p><strong>Sisters:</strong> {profile.sisters}</p>
          <p><strong>Cultural Values:</strong> {profile.culturalValues}</p>
          <p><strong>About Family:</strong> {profile.aboutFamily}</p>
        </div>

        {/* Patrika Details Section */}
        <div className={styles.patrikaSection}>
          <h2>Patrika Details</h2>
          <p><strong>Mother Tongue:</strong> {profile.motherTongue}</p>
          <p><strong>Religion:</strong> {profile.religion}</p>
          <p><strong>Time of Birth:</strong> {profile.timeOfBirth}</p>
          <p><strong>City of Birth:</strong> {profile.cityOfBirth}</p>
          <p><strong>Gotra:</strong> {profile.gotra}</p>
          <p><strong>Ras:</strong> {profile.ras}</p>
          <p><strong>Gan:</strong> {profile.gan}</p>
          <p><strong>Nadi:</strong> {profile.nadi}</p>
          <p><strong>Charan:</strong> {profile.charan}</p>
        </div>

        {/* Ideal Partner Preferences Section */}
        <div className={styles.partnerSection}>
          <h2>Ideal Partner Preferences</h2>
          <p><strong>Age Range:</strong> {profile.partnerAgeFrom} - {profile.partnerAgeTo}</p>
          <p><strong>Education:</strong> {profile.partnerEducation}</p>
          <p><strong>Location:</strong> {profile.partnerLocation}</p>
          <p><strong>Package:</strong> {profile.partnerPackage}</p>
          <p><strong>About Partner:</strong> {profile.partnerAbout}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
