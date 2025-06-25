// Testimonihome.jsx
import React from "react";
import Slider from "react-slick";
import styles from "./Testimonihome.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import image1 from "../image/image1.jpg";
import image2 from "../image/image6.jpg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
    <FaArrowRight />
  </div>
);

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

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,
  autoplay: true,              // <-- added
  autoplaySpeed: 3000,         // <-- time between slides in milliseconds
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: true,       // autoplay still on mobile
      },
    },
  ],
};


const Testimonihome = () => {
  return (
    <div className={styles.testimonialSection}>
      <h1 className={styles.mainTitle}>Testimonial</h1>
      <h2 className={styles.title}>
        <FaQuoteLeft className={styles.icon} /> What Our Happy Couples Say
        <FaQuoteRight className={styles.icon} />
      </h2>

      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.cardWrapper}>
              <div className={styles.card}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.image} />
                <h3 className={styles.name}>{testimonial.name}</h3>
                <p className={styles.text}>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonihome;
