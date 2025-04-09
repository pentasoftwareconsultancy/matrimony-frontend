import React, { useState, useEffect } from "react";
import styles from "./Testimonihome.module.css";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Icons
import image1 from "../image/image1.jpg";
import image2 from "../image/image6.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";

const testimonials = [
  {
    image: image1,
    name: "Rahul & Priya",
    text: "A safe and trustworthy platform! The profiles are authentic, and the search filters made finding my ideal partner effortless. Highly recommended for those seeking a genuine relationship!",
  },
  {
    image: image2,
    name: "Amit & Sneha",
    text: "This platform exceeded my expectations! Verified profiles, a user-friendly interface, and a hassle-free matchmaking process made everything so simple.",
  },
  {
    image: image3,
    name: "Suresh & Anjali",
    text: "Finding a life partner felt like a challenge until I joined this platform. Thanks to this community, I connected with someone who shares my values and dreams.",
  },
  {
    image: image4,
    name: "Vikram & Pooja",
    text: "A fantastic platform for serious matchmaking! The profiles are well-managed, and the entire process is transparent and efficient. Highly recommended!",
  },
];

const Testimonihome = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.testimonialSection}>
      {/* ✅ Main Title */}
      <h1 className={styles.mainTitle}>Testimonial </h1>

      {/* ✅ Subtitle with Icon */}
      <h2 className={styles.title}>
        <FaQuoteLeft className={styles.icon} /> What Our Happy Couples Say
        <FaQuoteRight className={styles.bottomIcon} />
      </h2>

      <div className={styles.testimonialContainer}>
       

        <div className={styles.imageContainer}>
          <img src={testimonials[index].image} alt="testimonial" />
        </div>

        <div className={styles.textContainer}>
          <h3 className={styles.name}>{testimonials[index].name}</h3>
          <p className={styles.text}>
            {testimonials[index].text}
          </p>
          {/* ✅ Icon Below Text */}
          
          <div className={styles.main}>
          <button className={styles.navButton} onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className={styles.navButton} onClick={handleNext}>
          <FaChevronRight />
        </button>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Testimonihome;
