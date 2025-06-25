// src/components/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

// Import wedding images
import image1 from "../../about/image/image13.jpg";
import image2 from "../../about/image/image12.jpg";
import image3 from "../../about/image/image16.jpg";
import image4 from "../../about/image/image17.jpg";
import image5 from "../../about/image/image18.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      image: image1,
      text: "A safe and trustworthy platform! The profiles are authentic, and the search filters made finding my ideal partner effortless. The entire experience was seamless, and I'm grateful for the support provided throughout my journey.",
      name: "Amol & Priya",
      location: "Pune"
    },
    {
      image: image2,
      text: "This platform exceeded my expectations! Verified profiles, a user-friendly interface, and a hassle-free matchmaking process made everything so simple. I met my soulmate here, and I truly recommend it.",
      name: "Rohit & Ritika",
      location: "Mumbai"
    },
    {
      image: image3,
      text: "Finding a life partner felt like a challenge until I joined this platform. The process was smooth, secure, and completely stress-free. Thanks to this community, I connected with someone who shares my values and dreams.",
      name: "Akshay & Janvi",
      location: "Nashik"
    },
    {
      image: image4,
      text: "A fantastic platform for serious matchmaking! The profiles are well-managed, and the entire process is transparent and efficient. I never imagined finding love would be this easy and joyful!",
      name: "Tejas & Teju",
      location: "Nagpur"
    },
    {
      image: image5,
      text: "I had almost given up on finding my perfect match, but this platform changed everything! The carefully verified profiles and compatibility-based search system helped me meet someone truly special.",
      name: "Mayur & Mayuri",
      location: "Thane"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length);
          setFade(true);
        }, 300);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Love Stories <span>❤️</span></h2>
          <p>Experiences of couples who found their match on our platform</p>
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerFlower}></div>
            <div className={styles.dividerLine}></div>
          </div>
        </div>

        <div className={styles.testimonialContainer}>
          <div className={`${styles.testimonialCard} ${fade ? styles.fadeIn : styles.fadeOut}`}>
            <div className={styles.testimonialImage}>
              <div className={styles.imageWrapper}>
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                />
                <div className={styles.quoteIcon}>❝</div>
                <div className={styles.ornamentTop}></div>
                <div className={styles.ornamentBottom}></div>
              </div>
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>{testimonials[currentIndex].name}</h3>
                <p className={styles.authorRole}>{testimonials[currentIndex].location}</p>
              </div>
            </div>

            <div className={styles.testimonialContent}>
              <div className={styles.quoteWrapper}>
                <p className={styles.quote}>{testimonials[currentIndex].text}</p>
                <div className={styles.mandapDecoration}></div>
              </div>

              <div className={styles.controls}>
                <button className={`${styles.navBtn} ${styles.prev}`} onClick={prevTestimonial}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                  </svg>
                </button>

                <div className={styles.indicators}>
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
                      onClick={() => goToTestimonial(index)}
                    />
                  ))}
                </div>

                <button className={`${styles.navBtn} ${styles.next}`} onClick={nextTestimonial}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.autoPlayToggle}>
          <button onClick={toggleAutoPlay} className={styles.toggleBtn}>
            {isAutoPlaying ? 'Stop Auto Play' : 'Start Auto Play'}
          </button>
        </div>
      </div>

      <div className={styles.floralDecoration}></div>
    </section>
  );
};

export default Testimonials;
