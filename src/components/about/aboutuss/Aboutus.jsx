// import React from "react";
// import styles from "./Aboutus.module.css";

// const Aboutus = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.textSection}>
//         <h2>About Us</h2>
//         <div className={styles.main}>
//         <p className={styles.text}>
//         "Welcome to Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, a dedicated platform committed to bringing together like-minded 
//         individuals from the Kunbi community. Our mission is to help you find a life partner who shares your values, beliefs, and aspirations, 
//         ensuring a strong foundation for a happy and fulfilling marriage. We take pride in preserving cultural heritage while embracing modern
//          matchmaking methods to create meaningful and lasting relationships.
//         </p>
//         <p>
//         We understand that finding the right match is one of the most important decisions in life, which is why we provide a trusted and secure 
//         space for genuine connections. With verified profiles, advanced matchmaking features, and user-friendly navigation, we make the search for
//          your soulmate easier and more efficient. Our platform is designed to cater to individuals seeking both tradition and compatibility, making
//           the journey of finding your ideal partner smooth and enjoyable.
//         </p>
//         <p>
//         BBeyond matchmaking, our platform fosters community bonding, upholds cultural traditions, and encourages meaningful relationships built 
//         on trust and compatibility. We strive to create an environment where individuals and families can connect, interact, and celebrate the 
//         essence of togetherness. Whether you're searching for love, companionship, or a lifelong partner, we are here to support and guide you 
//         every step of the way.
//         </p>
//         <p>
//         Join us today and take the first step toward a beautiful and lasting relationship! Let us help you turn your dreams into reality by 
//         connecting you with someone who truly understands and values you. With our commitment to authenticity, privacy, and personalized 
//         matchmaking, we ensure a seamless and enriching experience as you embark on this incredible journey of finding love and happiness."
//         </p>
//         </div>
//       </div>

//       {/* Our Values Section */}
//       <div className={styles.valuesSection}>
//         <h3>Our Values</h3>
//         <ul className={styles.valuesList}>
//   <li>
//     <strong>Trust and Security:</strong>
//     <span>We ensure verified profiles, strong privacy settings, and a safe matchmaking experience so you can find your partner with confidence.</span>
//   </li>
//   <li>
//     <strong>Authenticity:</strong>
//     <span>We believe in real connections. Every profile is genuine, ensuring meaningful and long-lasting relationships.</span>
//   </li>
//   <li>
//     <strong>Respect for Diversity:</strong>
//     <span>We celebrate the diversity of cultures, religions, and backgrounds, offering a platform where everyone can find a match that aligns with their beliefs and traditions.</span>
//   </li>
//   <li>
//     <strong>Commitment to Service:</strong>
//     <span>Rooted in Kunbi culture, we respect traditions while providing a modern platform for easy and reliable matchmaking.</span>
//   </li>
//   <li>
//     <strong>Easy Matchmaking :</strong>
//     <span>Our smart search filters and compatibility-based suggestions help you find the right partner effortlessly.</span>
//   </li>
//   <li>
//     <strong> Respect & Inclusivity :</strong>
//     <span>We value every individual and provide a welcoming, respectful, and supportive space for all.</span>
//   </li> <li>
//     <strong>Lifelong Bonds:</strong>
//     <span>We don’t just help you find a match; we help you build a beautiful and lasting relationship.</span>
//   </li>
// {/* 
//   <li>
//     <strong>Strong Support System :</strong>
//     <span>Our team is always here to guide and assist you in your journey toward finding the perfect life partner.</span>
//   </li> */}
// </ul>
//       </div>

//       {/* Stats Section */}
//       {/* <div className={styles.statsSection}>
//         <div className={styles.stat}>
//           <span className={styles.statNumber}>2M</span>
//           <span className={styles.statLabel}>2 Million active users</span>
//         </div>
//         <div className={styles.stat}>
//           <span className={styles.statNumber}>19</span>
//           <span className={styles.statLabel}>Experienced employees</span>
//         </div>
//         <div className={styles.stat}>
//           <span className={styles.statNumber}>6</span>
//           <span className={styles.statLabel}>Years of experience</span>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Aboutus;

import React from "react";
import styles from "./Aboutus.module.css";
import { 
  FaShieldAlt, 
  FaHeart, 
  FaGlobeAsia, 
  FaHandshake, 
  FaSearch, 
  FaUsers,
  FaBook,
  FaHandHoldingHeart,
  FaLock,
  FaUserCheck
} from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>About Akhil Bhartiya Kunbi Samaj</h1>
          <p>Preserving traditions, forging connections, building futures</p>
        </div>
      </div>

      {/* About Content */}
      <div className={styles.contentSection}>
        <div className={styles.textSection}>
          <div className={styles.main}>
            <p className={styles.text}>
              <FaBook className={styles.icon} />
              Welcome to Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, a dedicated platform committed to bringing together like-minded 
              individuals from the Kunbi community. Our mission is to help you find a life partner who shares your values, beliefs, and aspirations, 
              ensuring a strong foundation for a happy and fulfilling marriage.
            </p>
            <p>
              <FaHandHoldingHeart className={styles.icon} />
              We take pride in preserving cultural heritage while embracing modern matchmaking methods to create meaningful and lasting relationships. 
              We understand that finding the right match is one of the most important decisions in life, which is why we provide a trusted and secure 
              space for genuine connections.
            </p>
            <p>
              <FaUsers className={styles.icon} />
              Beyond matchmaking, our platform fosters community bonding, upholds cultural traditions, and encourages meaningful relationships built 
              on trust and compatibility. We strive to create an environment where individuals and families can connect, interact, and celebrate the 
              essence of togetherness.
            </p>
            <p>
              <FaLock className={styles.icon} />
              Join us today and take the first step toward a beautiful and lasting relationship! With our commitment to authenticity, privacy, and personalized 
              matchmaking, we ensure a seamless and enriching experience as you embark on this incredible journey of finding love and happiness.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <h2>Our Core Values</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaShieldAlt />
              </div>
              <h3>Trust & Security</h3>
              <p>Verified profiles and strong privacy settings ensure a safe matchmaking experience.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHeart />
              </div>
              <h3>Authenticity</h3>
              <p>We believe in real connections with genuine profiles for meaningful relationships.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaGlobeAsia />
              </div>
              <h3>Respect for Diversity</h3>
              <p>Celebrating diverse cultures and backgrounds to find matches that align with your traditions.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaHandshake />
              </div>
              <h3>Commitment to Service</h3>
              <p>Rooted in Kunbi culture, we respect traditions while providing modern matchmaking.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaSearch />
              </div>
              <h3>Easy Matchmaking</h3>
              <p>Smart search filters and compatibility-based suggestions for effortless partner search.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <FaUserCheck />
              </div>
              <h3>Respect & Inclusivity</h3>
              <p>A welcoming, respectful, and supportive space for all community members.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;