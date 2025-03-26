import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Notificationmain.module.css";

const Notificationmain = () => {
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/v1/bride-groom");

      // Check if the response structure is as expected
      if (response.data && Array.isArray(response.data.data)) {
        setUsers(response.data.data);
      } else {
        console.error("Unexpected API response format:", response.data);
        setUsers([]);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]); // Ensuring that we always set an empty array in case of error
    } finally {
      setLoading(false);
    }
  };

  const handleApproval = async (id, isApproved) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/bride-groom/${id}`,
        { isApproved }
      );
      if (response.status === 200) {
        const message = isApproved ? "User Approved" : "User Disapproved";
        setNotifications((prevNotifications) => [...prevNotifications, message]);
        fetchUsers(); // Re-fetch users after update
      } else {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          "Error updating user status",
        ]);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        "Error updating user status",
      ]);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Admin Panel: Approve Users</h2>

      {/* Loading state */}
      {loading && <p>Loading users...</p>}

      {/* User list display */}
      <div className={styles.userList}>
        {users.map((profile) => (
          <div key={profile._id} className={styles.profileCard}>
            <h2>Personal Details</h2>
            <p><strong>Full Name:</strong> {profile.fullName}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Mobile Number:</strong> {profile.mobileNumber}</p>
            <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
            <p><strong>City:</strong> {profile.city}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>Marital Status:</strong> {profile.maritalStatus}</p>
            <p><strong>Number of Children:</strong> {profile.noOfChildren}</p>
            <p><strong>Height:</strong> {profile.height}</p>
            <p><strong>Weight:</strong> {profile.weight}</p>
            <p><strong>Body Type:</strong> {profile.bodyType}</p>
            <p><strong>Complexion:</strong> {profile.complexion}</p>
            <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
            <p><strong>Smoke:</strong> {profile.smoke ? "Yes" : "No"}</p>
            <p><strong>Drink:</strong> {profile.drink ? "Yes" : "No"}</p>
            <p><strong>Special Case:</strong> {profile.specialCase}</p>

            <h2>Final Step Details</h2>
            {profile.profilePhoto && <img className={styles.image} src={profile.profilePhoto} alt="Profile" />}
            <p><strong>PAN Card Number:</strong> {profile.panCardNumber}</p>
            <p><strong>Company ID:</strong> {profile.companyId}</p>
            <p><strong>Aadhar Number:</strong> {profile.aadharNumber}</p>
            {profile.aadharPhoto && <img className={styles.image} src={profile.aadharPhoto} alt="Aadhar" />}
            <p><strong>Passport Number:</strong> {profile.passportNumber}</p>
            <p><strong>Social Facebook:</strong> {profile.socialFacebook}</p>
            <p><strong>Social Instagram:</strong> {profile.socialInstagram}</p>
            <p><strong>Social LinkedIn:</strong> {profile.socialLinkedIn}</p>

            <div className={styles.actions}>
              <button
                onClick={() => handleApproval(profile._id, true)}
                className={styles.approve}
              >
                Approve
              </button>
              <button
                onClick={() => handleApproval(profile._id, false)}
                className={styles.disapprove}
              >
                Disapprove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Notification messages */}
      {notifications.length > 0 && (
        <div className={styles.notification}>
          {notifications.map((note, index) => (
            <p key={index}>{note}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notificationmain;
