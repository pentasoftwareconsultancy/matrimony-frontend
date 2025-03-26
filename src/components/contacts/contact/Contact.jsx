// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import styles from "./Contact.module.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     subject: "",
//     message: "",
//   });

//   const [isVerified, setIsVerified] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!isVerified) {
//       alert("Please verify you are not a robot!");
//       return;
//     }

  
//     emailjs
//       .send(
//         "your_service_id", 
//         "your_template_id", 
//         {
//           to_email: "sonali@gmail.com", 
//           name: formData.name,
//           email: formData.email,
//           mobile: formData.mobile,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         "your_public_key" 
//       )
//       .then(
//         (response) => {
//           alert("Message sent successfully!");
//           setFormData({
//             name: "",
//             email: "",
//             mobile: "",
//             subject: "",
//             message: "",
//           });
//         },
//         (error) => {
//           alert("Failed to send message. Please try again.");
//           console.error(error);
//         }
//       );
//   };

//   const handleRecaptcha = () => {
//     setIsVerified(!isVerified);
//   };

//   return (
//     <div className={styles.contactForm}>
//       <h2>Contact Us</h2>
//       <div className={styles.main}>
//         <div className={styles.container1}>
//           <form onSubmit={handleSubmit}>
//             <label>
//               Your Name*
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Your Email*
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Mobile Number*
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Subject*
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//               />
//             </label>

//             <label>
//               Message (optional)
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//             </label>

//             <div className={styles.recaptchaContainer}>
//               <input
//                 type="checkbox"
//                 id="recaptcha"
//                 checked={isVerified}
//                 onChange={handleRecaptcha}
//               />
//               <span>I'm not a robot</span>
//             </div>

//             <button type="submit" className={styles.submitButton}>
//               Send Message
//             </button>
//           </form>
//         </div>

//         <div className={styles.container2}>
//           <div className={styles.contactInfo}>
//             <h3>Information</h3>
//             <p>
//               <b>Address:</b> Plot No. 14, Sahavidyanagar Co-operative Hsg.
//               Society, Baner Road, Pune 411045
//             </p>
//             <p>
//               <b>Mobile Numbers:</b>
//             </p>
//             <p>+91-9822055033</p>
//             <p>+91-9359224017</p>
//             <p>
//               <b>Email:</b> lagnagath13@gmail.com
//             </p>
//             <p>
//               <b>Office Timings:</b> 11AM to 6PM, 9:30PM to 10PM
//             </p>
//             <p>
//               <b>Sunday:</b> Holiday
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;





import React from "react";
import styles from "./Contact.module.css";
import video from "../video/videoframe_18000.png"
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function Contact() {
  const notifySuccess = () => toast.success("Form Submitted Successfully");
  const notifyError = () => toast.error("Failed to send message");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1c8356d0-c051-42f8-aea1-d9cc5ee9ea91"); // Replace with your Web3Forms API key
    formData.append("from_name", "Your Website Name"); // Optional: Set a sender name

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      notifySuccess();
      event.target.reset(); // Clear the form after successful submission
    } else {
      notifyError();
      console.error(data.message);
    }
  };

  return (
    <div>

      <section className={styles.contactform}>
        <h2 className={styles.heading}>
          Contact Me
        </h2>
        <form onSubmit={onSubmit} className={styles.maincontact} >
          <div className={styles.contactformbox}>
            <div className={styles.contactformfield}>
            <label>
            Name*
              <input type="text" placeholder="Enter Name" required name="name" />
              <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.contactformfield}>
            <label>
            Email*
              <input type="email" placeholder="Enter Email" required name="email" />
              <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.contactformfield}>
            <label>
            Mobile Number*
              <input type="tel" placeholder="Enter Mobile No" required name="mobile" />
              <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.contactformfield}>
            <label>
            Subject*
              <input type="text" placeholder="Enter Subject" required name="subject" />
              <span className={styles.focus}></span>
              </label>
            </div>
            <div className={styles.messageboxfield}>
            
              <textarea cols="30" rows="10" placeholder="Your Message" required name="message"></textarea>
              <span className={styles.focus}></span>
            </div>
            </div>
            <div className={styles.container2}>
          <div className={styles.contactInfo}>
             <h3>Information</h3>
             <p>
               <b>Address:</b> Plot No. 14, Sahavidyanagar Co-operative Hsg.
               Society, Baner Road, Pune 411045
             </p>
             <p>
               <b>Mobile Numbers:</b>
             </p>
             <p>+91-9822055033</p>
             <p>+91-9359224017</p>
             <p>
               <b>Email:</b> lagnagath13@gmail.com
             </p>
             <p>
               <b>Office Timings:</b> 11AM to 6PM, 9:30PM to 10PM
             </p>
             <p>
               <b>Sunday:</b> Holiday
             </p>
           </div>
            
          </div>
          <div className={styles.bottonbox}>
              <button type="submit" className={styles.btn}>Submit</button>
            </div>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Contact;