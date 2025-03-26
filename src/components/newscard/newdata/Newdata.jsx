import news1 from "../images/new1.webp"
import news2 from "../images/news2.jpg"
import news3 from "../../events/image/event2.avif"
const newData = [
  {
    id: 1,
    title: "Technology Revolution in AI",
    description: "Exploring the latest advancements in Artificial Intelligence.",
    detail: "AI technology is transforming various industries. In this article, we discuss the most recent breakthroughs.",
    author: "Tech Expert",
    content: "Artificial intelligence is reshaping industries such as healthcare, automotive, and finance. The future looks bright for AI with new innovations in deep learning, natural language processing, and robotics.",
    image: news1,
    date: "January 2025",
    category: "Technology",
    tags: ["AI", "Innovation", "Technology"],
    type: "Analysis",
    source: "BBC News",
    keywords: ["AI", "Deep Learning", "Robotics", "Technology"],
  },
  {
    id: 2,
    title: "The Impact of Climate Change on Coastal Cities",
    description: "How rising sea levels are threatening urban landscapes.",
    detail: "Coastal cities are increasingly vulnerable to flooding due to climate change. This article looks at the most affected regions and how they are coping.",
    author: "Environmental Scientist",
    content: "Many coastal cities around the world are witnessing more frequent and severe flooding events. Experts are calling for better urban planning and proactive measures to mitigate the impact of rising sea levels.",
    image: news2,
    date: "January 2025",
    category: "Environment",
    tags: ["Climate Change", "Coastal Cities", "Environment"],
    type: "Feature Story",
    source: "The Guardian",
    keywords: ["Climate Change", "Flooding", "Sea Levels", "Environment"],
  },
  {
    id: 3,
    title: "The Future of Remote Work",
    description: "How remote work is reshaping the modern workplace.",
    detail: "The rise of remote work is changing the way we approach business, communication, and work-life balance.",
    author: "Business Analyst",
    content: "In recent years, remote work has become a permanent feature of many companies. With advances in communication tools and flexible work policies, employees and employers alike are adjusting to this new reality.",
    image: news3,
    date: "February 2025",
    category: "Business",
    tags: ["Remote Work", "Workplace", "Business"],
    type: "Analysis",
    source: "Forbes",
    keywords: ["Remote Work", "Communication Tools", "Flexible Work Policies"],
  },
  {
    id: 4,
    title: "Health Benefits of a Plant-Based Diet",
    description: "Understanding the health advantages of switching to a plant-based diet.",
    detail: "A growing body of research supports the health benefits of plant-based eating. Learn why more people are making the change.",
    author: "Nutrition Expert",
    content: "Switching to a plant-based diet can lower the risk of heart disease, improve digestion, and increase energy levels. This article provides insights into how to make the transition smoothly.",
    image: news3,
    date: "March 2025",
    category: "Health",
    tags: ["Plant-Based Diet", "Health", "Nutrition"],
    type: "Feature Story",
    source: "Healthline",
    keywords: ["Plant-Based Diet", "Heart Disease", "Nutrition"],
  },
  {
    id: 5,
    title: "Space Exploration: Mars Mission Updates",
    description: "The latest developments in space exploration and Mars missions.",
    detail: "NASA and other space agencies are focusing on sending humans to Mars. Discover the progress and challenges of these ambitious missions.",
    author: "Astronaut",
    content: "Space agencies are preparing for a future where human life exists on Mars. With recent successful missions, we are closer than ever to understanding the potential for life beyond Earth.",
    image: news1,
    date: "April 2025",
    category: "Science",
    tags: ["Space Exploration", "Mars", "Science"],
    type: "Breaking News",
    source: "NASA Official",
    keywords: ["Space Exploration", "Mars", "NASA", "Science"],
  },
  {
    id: 6,
    title: "Political Trends for the Upcoming Elections",
    description: "An analysis of the key political trends shaping the next elections.",
    detail: "With elections approaching, this article dives into the political strategies and voter behavior trends that are influencing campaigns.",
    author: "Political Analyst",
    content: "As political campaigns ramp up, key trends such as social media strategies, grassroots movements, and economic policy debates are shaping voter preferences.",
    image: news2,
    date: "May 2025",
    category: "Politics",
    tags: ["Elections", "Politics", "Campaigns"],
    type: "Opinion Article",
    source: "The Washington Post",
    keywords: ["Elections", "Politics", "Voter Behavior", "Campaign Strategies"],
  },
  {
    id: 7,
    title: "The Rise of Esports",
    description: "How esports is becoming a billion-dollar industry.",
    detail: "Esports is rapidly growing, attracting massive audiences and investments. Learn how this industry is reshaping entertainment and sports.",
    author: "Sports Journalist",
    content: "Esports tournaments are drawing millions of viewers worldwide, with players becoming celebrities and advertisers flocking to sponsor events. The industry's growth shows no signs of slowing down.",
    image: news3,
    date: "June 2025",
    category: "Sports",
    tags: ["Esports", "Gaming", "Sports Industry"],
    type: "Feature Story",
    source: "ESPN",
    keywords: ["Esports", "Gaming", "Streaming Platforms", "Entertainment"],
  },
];











export const heroNewsData = {
  title: "Welcome to Our News Portal",
  subtitle: "Stay updated with the latest news and events.",
  images: [
    news1,
    news2,
  //  news3,
   news2
  ],
};

export const newsBodyData = {
  heading: "Breaking News",
  content: "Discover the most important updates from around the globe.",
};









// Example of your self-contained data file
export const locations = [
  "New York",
  "Los Angeles",
  "San Francisco",
  "Chicago",
  "Miami"
];

export const categories = [
  "Music",
  "Art",
  "Technology",
  "Business",
  "Sports"
];

export const dates = [
  "January 2025",
  "February 2025",
  "March 2025",
  "April 2025",
  "May 2025"
];







export const bannerData = {
  title: "Welcome to Our Website!",
  description:
    "Explore our services and offerings. We provide top-notch solutions tailored to your needs.",
  buttonText: "Get Started",
};

export default newData;
