// Importing the event image correctly
import event from "../../events/image/event2.avif";

// Exporting event data, locations, and categories
export const eventData = {
  image: event,
  category: "Technology",
  title:  "Empowering the Kunbi Community,Building a Stronger Future",
  date: "Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal : United we stand,",
  location: " building a prosperous future together",
  buttons: [
    { text: "Purchase Ticket", link: "#" },
    { text: "View Details", link: "#" }
  ]
};

export const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "San Francisco",
];

export const categories = ["Music", "Sports", "Theater", "Art", "Festival"];

export default { eventData, locations, categories };
