import React, { useState } from "react";
import Newcard from "../nescard/Newcard"; // Make sure this is the correct import path
import styles from "./Card.module.css";
import newData from "../newdata/Newdata"; // Import data

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Banner from "../banner/Banner";

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Number of cards per page
  const totalPages = Math.ceil(newData.length / cardsPerPage);

  // Get the cards for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = newData.slice(startIndex, startIndex + cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* <div className={styles.container1}><Banner/></div> */}
      <div className={styles.cardGrid}>
        {currentCards.map((card) => (
          <Newcard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            author={card.author}
            content={card.content}
            image={card.image}
          />
        ))}
      </div>
      {/* <div className={styles.container2}><Banner/></div> */}
      </div>
      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          <FaArrowLeft /> Prev
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
