import image1 from "../image/image.jpg"
import image2 from "../image/music.webp"
import image3 from "../image/salon.jpg"
import image4 from "../image/shop.jpg"
import image5 from "../image/image2.jpg"
const vendors = [
  {
    id: 1,
    title: "vajantri",
    name:"XYZ",
    images:image5,
    phone:"8709878598",
    service:"",
    address:"123 Main St, Cityville",
    category: "Mandap",
    description: "Providing elegant and customizable mandaps for your special events.",
    content: "We offer traditional and modern mandap designs to match your event theme.",
    image: image1,
    date: "2025-01-25",
    time: "10:00 AM",
    place: "City Convention Center",
    agenda: "Discuss various mandap designs and services.",
    participants: [
      {
        fullName: "John Doe",
        age: 35,
        gender: "Male",
        occupation: "Event Manager",
        company: "Dream Events Co.",
        location: "New York",
        interests: "Traditional and modern decor",
        role: "Organizer",
        attendanceConfirmed: true,
        feedback: "Loved the variety of designs available.",
      },
      
    ],
  },
  {
    id: 2,
    title: "Classic Vajantri Band",
    category: "Vajantri",
    description: "Music to make your moments memorable.",
    content: "Specialized in traditional wedding music with experienced musicians.",
    image: image2,
    date: "2025-02-01",
    time: "6:00 PM",
    place: "Downtown Music Hall",
    agenda: "Showcase of classic wedding music themes.",
    participants: [],
  },
  {
    id: 3,
    title: "Delicious Bhojanal Caterers",
    category: "Bhojanal",
    description: "Tasty and hygienic catering services.",
    content: "We provide multi-cuisine catering with a variety of menu options.",
    image: image3,
    date: "2025-02-10",
    time: "12:00 PM",
    place: "Event Plaza",
    agenda: "Explore new catering menu items.",
    participants: [],
  },
  {
    id: 4,
    title: "Quick Event Loans",
    category: "Loan",
    description: "Finance your dream events easily.",
    content: "Get hassle-free event loans with minimal documentation.",
    image: image4,
    date: "2025-02-15",
    time: "2:00 PM",
    place: "Finance Hub",
    agenda: "Discuss loan options for event organizers.",
    participants: [],
  },
];

export default vendors;
