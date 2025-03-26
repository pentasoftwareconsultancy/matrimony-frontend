import { useEffect, useRef, useState } from "react";
import styles from "./Heromain.module.css";

// ✅ Importing local images
import image1 from "../hero/images/image13.webp";
import image2 from "../hero/images/image12.webp";
import image3 from "../hero/images/image13.webp";
import image5 from "../hero/images/slide2.jpg";
import image6 from "../hero/images/image12.webp";

// ✅ Image and corresponding text array
const slides = [
  {
    image: image1,
    title: "Two Souls, One Destiny – Begin Your Love Story Today!",
  },
  {
    image: image2,
    title: "Bringing Hearts Together, Weaving Lifelong Bonds.",
  },
  {
    image: image3,
    title: "A Journey of Love Begins with a Perfect Match!",
  },
  {
    image: image5,
    title:"Where Traditions Meet True Love.",
  },
  {
    image: image6,
    title: "Your Soulmate Awaits – Let’s Make It Happen!",
  },
//   {
//     image: "https://www.bhaktiwallpapers.com/uploads/2024/02/bajranbali-hanuman-hanumant-2k-monkey-god-jai-hanuman-sri-hanuman-hd-phone-wallpaper-gjcl-1708265868.jpg",
//     title: "Believe, Achieve, and Inspire with Shadi Bes",
//   },
//   {
//     image: "https://i.pinimg.com/736x/b5/fe/af/b5feaf388689757b5c71f0903df819ea.jpg",
//     title: "Bringing Hope, One Step at a Time",
//   },
];

const HeroSlider = () => {
  const listRef = useRef(null);
  const carouselRef = useRef(null);
  const runningTimeRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const timeRunning = 1000;
  const timeAutoNext = 8000;
  let runNextAuto;

  const resetTimeAnimation = () => {
    const runningTime = runningTimeRef.current;
    if (runningTime) {
      runningTime.style.animation = "none";
      void runningTime.offsetHeight; // Trigger reflow
      runningTime.style.animation = "runningTime 7s linear 1 forwards";
    }
  };

  const showSlider = (type) => {
    const list = listRef.current;
    const sliderItemsDom = list.querySelectorAll(`.${styles.item}`);

    if (type === "next") {
      list.appendChild(sliderItemsDom[0]);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      carouselRef.current.classList.add("next");
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      carouselRef.current.classList.add("prev");
    }

    setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextBtnRef.current.click();
    }, timeAutoNext);

    resetTimeAnimation();
  };

  useEffect(() => {
    resetTimeAnimation();
    runNextAuto = setTimeout(() => {
      nextBtnRef.current.click();
    }, timeAutoNext);

    return () => clearTimeout(runNextAuto); // Cleanup timeout on unmount
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.list} ref={listRef}>
          {slides.map((slide, index) => (
            <div
              className={styles.item}
              key={index}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* ✅ Text inside the slide itself */}
              <div className={styles.content}>
                <h2 className={styles.title}>{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className={styles.arrows}>
          <button
            className={styles.prev}
            ref={prevBtnRef}
            onClick={() => showSlider("prev")}
          >
            {"<"}
          </button>
          <button
            className={styles.next}
            ref={nextBtnRef}
            onClick={() => showSlider("next")}
          >
            {">"}
          </button>
        </div>

        {/* Running Time Indicator */}
        <div className={styles.timeRunning} ref={runningTimeRef}></div>
      </div>
    </div>
  );
};

export default HeroSlider;
