import React from "react";
import { useParams } from "react-router-dom";
import newData from "../newdata/Newdata"; // Import data
import styles from "./Newcardpage.module.css"; // Styling for the card details page

const Newcardpage = () => {
  const { id } = useParams(); // Get the card ID from the URL
  const card = newData.find((item) => item.id === parseInt(id, 10)); // Find the card by ID

  if (!card) {
    return <div>Card not found!</div>;
  }

  return (
    <div className={styles.cardDetail}>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} className={styles.image} />
      <p>{card.content}</p>
      <p>By: {card.author}</p>
      <p><strong>Category:</strong> {card.category}</p>
      <p><strong>Published on:</strong> {card.date}</p>
      <p><strong>Tags:</strong> {card.tags.join(", ")}</p>

      {/* Adding all other details */}

      {/* News Content Type */}
      <p><strong>Type of News:</strong> {card.type}</p>
      
      {/* News Source */}
      <p><strong>Source of News:</strong> {card.source}</p>
      
      {/* Keywords */}
      <p><strong>Keywords:</strong> {card.keywords.join(", ")}</p>
      
      {/* Categories */}
      <p><strong>News Category:</strong> {card.category}</p>
      
      {/* Challenges in Accessing News */}
      <h3>Challenges in Accessing News:</h3>
      <ul>
        <li><strong>Data Accuracy:</strong> Ensuring reliable and trustworthy sources.</li>
        <li><strong>Real-time Updates:</strong> Keeping up with the constant flow of new information.</li>
        <li><strong>Language and Region Differences:</strong> Adapting content for different languages and regions.</li>
        <li><strong>Content Filtering:</strong> Determining what is "important" based on audience needs.</li>
      </ul>

      {/* News Filtering Options */}
      <h3>News Filtering Options:</h3>
      <ul>
        <li><strong>By Keywords:</strong> {card.keywords.join(", ")}</li>
        <li><strong>By Source:</strong> {card.source}</li>
        <li><strong>By Time:</strong> {card.date}</li>
        <li><strong>By Region:</strong> {card.category}</li>
      </ul>

      {/* News Access Methods (APIs, etc.) */}
      <h3>News Data Access Methods:</h3>
      <ul>
        <li><strong>APIs for News:</strong> You can access data via APIs like NewsAPI, Bing News API, etc.</li>
        <li><strong>RSS Feeds:</strong> For real-time headline collection.</li>
        <li><strong>Web Scraping:</strong> Pulling data directly from news sites when APIs are unavailable.</li>
      </ul>
    </div>
  );
};

export default Newcardpage;
