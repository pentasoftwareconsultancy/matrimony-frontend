import React, { useState, useEffect } from "react";
import styles from "./ScrollingImages.module.css";

const ScrollingImages = () => {
  const [images, setImages] = useState([]); // State to hold images
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Fetch images from the backend API
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/eventimage");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Assuming the API returns an array of image objects
        setImages(data.data); // Adjust according to your API response structure
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Slide every 2 seconds

    return () => clearInterval(interval);
  }, [images]); // Add images as a dependency

  return (
    <div className={styles.scroller}>
      <div
        className={styles.scrollerInner}
        style={{ transform: `translateX(-${index * 100}%)`, transition: "transform 0.5s ease-in-out" }}
      >
        {images.map((img, idx) => (
          <img key={idx} src={img.imageevent} alt={`Sliding ${idx}`} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;