// import React from "react";
// import styles from "./Contact.module.css";
// import "react-toastify/dist/ReactToastify.css";
// import { toast, ToastContainer } from "react-toastify";

// function Contact() {
//   const notifySuccess = () => toast.success("Form Submitted Successfully");
//   const notifyError = () => toast.error("Failed to send message");

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     formData.append("access_key", "1c8356d0-c051-42f8-aea1-d9cc5ee9ea91"); // Replace with your Web3Forms API key
//     formData.append("from_name", "Your Website Name");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       notifySuccess();
//       event.target.reset();
//     } else {
//       notifyError();
//       console.error(data.message);
//     }
//   };

//   return (
//     <div>
//       <section className={styles.contactform}>
//         <h2 className={styles.heading}>
//           Contact <span>Me</span>
//         </h2>
//         <form onSubmit={onSubmit} className={styles.maincontact}>
//           <div className={styles.container2}>
//             <div className={styles.contactInfo}>
//               <h3>Information</h3>
//               <p>
//                 <b>Address:</b> Bussval Nagar Dyrafur Road AKOT. Dist Akola
//               </p>
//               <p>
//                 <b>Mobile Numbers: </b>
//                 9421830662
//               </p>
             
//               {/* <p>+91-9359224017</p> */}
//               <p>
//                 <b>Email:</b> anilraoshridhargawande@gmail.com
//               </p>
//               <p>
//                 <b>Office Timings:</b> 11AM to 6PM, 9:30PM to 10PM
//               </p>
//               <p>
//                 <b>Sunday:</b> Holiday
//               </p>
//             </div>
//           </div>
//           <div className={styles.contactformbox}>
//             <div className={styles.contactformfield} style={{ "--order": 1 }}>
//               <label>
//                 Name*
//                 <input type="text" placeholder="Enter Name" required name="name" />
//                 <span className={styles.focus}></span>
//               </label>
//             </div>
//             <div className={styles.contactformfield} style={{ "--order": 2 }}>
//               <label>
//                 Email*
//                 <input type="email" placeholder="Enter Email" required name="email" />
//                 <span className={styles.focus}></span>
//               </label>
//             </div>
//             <div className={styles.contactformfield} style={{ "--order": 3 }}>
//               <label>
//                 Mobile Number*
//                 <input type="tel" placeholder="Enter Mobile No" required name="mobile" />
//                 <span className={styles.focus}></span>
//               </label>
//             </div>
//             <div className={styles.contactformfield} style={{ "--order": 4 }}>
//               <label>
//                 Subject*
//                 <input type="text" placeholder="Enter Subject" required name="subject" />
//                 <span className={styles.focus}></span>
//               </label>
//             </div>
//             <div className={styles.messageboxfield} style={{ "--order": 5 }}>
//               <textarea
//                 cols="30"
//                 rows="10"
//                 placeholder="Your Message"
//                 required
//                 name="message"
//               ></textarea>
//               <span className={styles.focus}></span>
//             </div>
//           </div>
//           <div className={styles.bottonbox}>
//             <button type="submit" className={styles.btn}>
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//       <ToastContainer />
//     </div>
//  );
// }

// export default Contact;


import React from "react";
import styles from "./Contact.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const notifySuccess = () => toast.success("Form Submitted Successfully");
  const notifyError = () => toast.error("Failed to send message");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "your-access-key");
    formData.append("from_name", "Your Website");

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
          Contact <span>Us</span>
        </h2>
        <div className={styles.maincontact}>
          {/* Left: Contact Form */}
          <form onSubmit={onSubmit} className={styles.contactformbox}>
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
                placeholder="Your Message"
                required
                name="message"
              ></textarea>
              <span className={styles.focus}></span>
            </div>
            <div className={styles.bottonbox}>
              <button type="submit" className={styles.btn}>Submit</button>
            </div>
          </form>

          {/* Right: Contact Info + Map */}
          <div className={styles.contactDetails}>
            <div className={styles.contactInfo}>
              <h3>Information</h3>
              <p><b>Address:</b> Bussval Nagar Dyrafur Road AKOT. Dist Akola</p>
              <p><b>Mobile Numbers:</b> 9421830662</p>
              <p><b>Email:</b> anilraoshridhargawande@gmail.com</p>
              <p><b>Office Timings:</b> 11AM to 6PM, 9:30PM to 10PM</p>
              <p><b>Sunday:</b> Holiday</p>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4182158531553!2d73.78816727530582!3d18.56043828719625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7f8df5f3b7%3A0x204bda65046fa605!2sBaner%20Rd%2C%20Pune%2C%20Maharashtra%20411045%2C%20India!5e0!3m2!1sen!2sin!4v1696667823169!5m2!1sen!2sin"
                title="Google Map"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Contact;
