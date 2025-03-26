import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import image1 from "../image/image1.jpg";
import image2 from "../image/image6.jpg"
import image3 from "../image/image3.jpg"
import image4 from "../image/image4.jpg"
const testimonials = [
  {
    image: image1,
    text: "A safe and trustworthy platform! The profiles are authentic, and the search filters made finding my ideal partner effortless. The entire experience was seamless, and I’m grateful for the support provided throughout my journey. The user-friendly design and detailed profile verification gave me peace of mind. Highly recommended for those seeking a genuine relationship!",
    
  },
  {
    image: image2,
    text: "This platform exceeded my expectations! Verified profiles, a user-friendly interface, and a hassle-free matchmaking process made everything so simple. I met my soulmate here, and I truly recommend it to anyone looking for a serious relationship. The advanced matchmaking system helped me connect with someone who shares my interests, making the experience even more special.",
   
  },
  {
    image: image3,
    text: "Finding a life partner felt like a challenge until I joined this platform. The process was smooth, secure, and completely stress-free. Thanks to this community, I connected with someone who shares my values and dreams. The communication tools and profile details helped me make a confident and informed decision. The platform’s simple yet effective interface made my journey easy, and I finally found the perfect match!",
   
  },
  {
    image: image4,
    text: "A fantastic platform for serious matchmaking! The profiles are well-managed, and the entire process is transparent and efficient. I never imagined finding love would be this easy and joyful! The platform’s commitment to privacy and authenticity made my experience truly wonderful. The compatibility-based recommendations saved me so much time and helped me connect with someone truly special.",
   
  },
  {
    image: image3,
    text: "I had almost given up on finding my perfect match, but this platform changed everything! The carefully verified profiles and the compatibility-based search system helped me meet someone truly special. I appreciate the efforts taken to create such a secure and trustworthy matchmaking experience! The detailed filters allowed me to find someone who matched my preferences, making my search so much more meaningful.",
    
  }
];
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setFade(true);
    }, 500);
  };

  return (
    <div className={styles.testimonialContainer}>
      <div className={`${styles.imageContainer} ${fade ? styles.fadeInLeft : styles.fadeOut}`}>
        <img src={testimonials[index].image} alt="testimonial" />
      </div>
      <div className={`${styles.textContainer} ${fade ? styles.fadeInRight : styles.fadeOut}`}>
        <p className={styles.text}>{testimonials[index].text}</p>
        {/* <button className={styles.button} onClick={handleNext}>Next</button> */}
      </div>
    </div>
  );
};

export default Testimonials;