import React from "react";
import styles from "./Contact.module.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Contact() {
  const notifySuccess = () => toast.success("Form Submitted Successfully");
  const notifyError = () => toast.error("Failed to send message");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1c8356d0-c051-42f8-aea1-d9cc5ee9ea91"); // Replace with your Web3Forms API key
    formData.append("from_name", "Your Website Name");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      notifySuccess();
      event.target.reset();
    } else {
      notifyError();
      console.error(data.message);
    }
  };

  return (
    <div>
      <section className={styles.contactform}>
        <h2 className={styles.heading}>
          Contact <span>Me</span>
        </h2>
        <form onSubmit={onSubmit} className={styles.maincontact}>
          <div className={styles.container2}>
            <div className={styles.contactInfo}>
              <h3>Information</h3>
              <p>
                <b>Address:</b> Bussval Nagar Dyrafur Road AKOT. Dist Akola
              </p>
              <p>
                <b>Mobile Numbers: </b>
                9421830662
              </p>
             
              {/* <p>+91-9359224017</p> */}
              <p>
                <b>Email:</b> anilraoshridhargawande@gmail.com
              </p>
              <p>
                <b>Office Timings:</b> 11AM to 6PM, 9:30PM to 10PM
              </p>
              <p>
                <b>Sunday:</b> Holiday
              </p>
            </div>
          </div>
          <div className={styles.contactformbox}>
            <div className={styles.contactformfield} style={{ "--order": 1 }}>
              <label>
                Name*
                <input type="text" placeholder="Enter Name" required name="name" />
                <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.contactformfield} style={{ "--order": 2 }}>
              <label>
                Email*
                <input type="email" placeholder="Enter Email" required name="email" />
                <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.contactformfield} style={{ "--order": 3 }}>
              <label>
                Mobile Number*
                <input type="tel" placeholder="Enter Mobile No" required name="mobile" />
                <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.contactformfield} style={{ "--order": 4 }}>
              <label>
                Subject*
                <input type="text" placeholder="Enter Subject" required name="subject" />
                <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.messageboxfield} style={{ "--order": 5 }}>
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
                name="message"
              ></textarea>
              <span className={styles.focus}></span>
            </div>
          </div>
          <div className={styles.bottonbox}>
            <button type="submit" className={styles.btn}>
              Submit
            </button>
          </div>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Contact;