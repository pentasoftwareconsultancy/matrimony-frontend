// import image1 from "../../newscard/images/news2.jpg"; 
import image1 from "../image/event2.avif"
import image2 from "../image/event3.jpg"
import image3 from "../image/event4.avif" // Ensure the path is correct

const eventsData = [
  {
    id: 1,
    title: "Music Concert",
    image: image1,
    author: "Sonali",
    date: "2025-01-20",
    time: "7:00 PM",
    place: "Madison Square Garden, NY",
    description: "Experience an evening of exhilarating music and performances from renowned artists.",
    content: "Enjoy a wide variety of performances across genres.",
    eventType: "Concert",  // Event Type
    agenda: "Live performances from various artists.",  // Event Agenda

    // Biographical Data of Participants
    participants: [
      {
        fullName: "Sonali Sharma",
        age: 30,
        gender: "Female",
        occupation: "Event Organizer",
        company: "XYZ Events",
        location: "New York, USA",
        interests: "Music, Event Planning",
        role: "Organizer",
        attendanceConfirmed: true,
        feedback: "The event was a success! Audience loved it."
      },
      {
        fullName: "John Doe",
        age: 35,
        gender: "Male",
        occupation: "Musician",
        company: "Indie Band",
        location: "Los Angeles, USA",
        interests: "Music, Performance Art",
        role: "Performer",
        attendanceConfirmed: true,
        feedback: "Had a great time performing! Would love to do more events like this."
      },
      {
        fullName: "Sonali Sharma",
        age: 30,
        gender: "Female",
        occupation: "Event Organizer",
        company: "XYZ Events",
        location: "New York, USA",
        interests: "Music, Event Planning",
        role: "Organizer",
        attendanceConfirmed: true,
        feedback: "The event was a success! Audience loved it."
      },
    ]
  },
  {
    id: 2,
    title: "Art Exhibition",
    image: image2,
    author: "Alice",
    date: "2025-01-25",
    time: "10:00 AM",
    place: "Louvre Museum, Paris",
    description: "A journey through the most iconic art pieces from around the globe.",
    content: "Explore a curated selection of masterpieces.",
    eventType: "Exhibition",  // Event Type
    agenda: "Display of artworks, guided tours.",  // Event Agenda

    // Biographical Data of Participants
    participants: [
      {
        fullName: "Alice Johnson",
        age: 40,
        gender: "Female",
        occupation: "Curator",
        company: "Louvre Museum",
        location: "Paris, France",
        interests: "Art, History",
        role: "Organizer",
        attendanceConfirmed: true,
        feedback: "Wonderful experience showcasing global masterpieces."
      },
      {
        fullName: "Marc Dupont",
        age: 50,
        gender: "Male",
        occupation: "Artist",
        company: "Self-employed",
        location: "Paris, France",
        interests: "Sculpture, Painting",
        role: "Artist",
        attendanceConfirmed: true,
        feedback: "Amazing audience! Happy to showcase my art here."
      }
    ]
  },
  {
    id: 3,
    title: "Tech Conference",
    image: image3,
    author: "Bob",
    date: "2025-02-05",
    time: "9:00 AM",
    place: "Silicon Valley, CA",
    description: "Dive into the latest advancements in technology with industry leaders.",
    content: "Sessions with top tech innovators.",
    eventType: "Conference",  // Event Type
    agenda: "Tech talks, panel discussions, networking sessions.",  // Event Agenda

    // Biographical Data of Participants
    participants: [
      {
        fullName: "Bob Williams",
        age: 45,
        gender: "Male",
        occupation: "Conference Organizer",
        company: "Tech Innovators Corp.",
        location: "San Francisco, USA",
        interests: "Technology, AI",
        role: "Organizer",
        attendanceConfirmed: true,
        feedback: "The conference was a great platform for networking and sharing ideas."
      },
      {
        fullName: "Sarah Lee",
        age: 32,
        gender: "Female",
        occupation: "Software Engineer",
        company: "Google",
        location: "Mountain View, USA",
        interests: "Machine Learning, Cloud Computing",
        role: "Speaker",
        attendanceConfirmed: true,
        feedback: "Enjoyed discussing the future of AI with like-minded professionals."
      }
    ]
  }
];

export default eventsData;
