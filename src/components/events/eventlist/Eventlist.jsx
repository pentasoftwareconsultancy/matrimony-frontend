import React, { useState } from "react";
import Eventscard from "../Eventscard/Eventscard";
import styles from "./Eventlist.module.css";
import eventsData from "../data/eventsData"; // Correct import path

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Eventlist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(eventsData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = eventsData.slice(startIndex, startIndex + cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {currentCards.map((event) => (
          <Eventscard key={event.id} event={event} />
        ))}
      </div>

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

export default Eventlist;
