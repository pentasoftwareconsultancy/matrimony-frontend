

// import React from "react";
// import styles from "./Aboutus.module.css";
// import { 
//   FaShieldAlt, 
//   FaHeart, 
//   FaGlobeAsia, 
//   FaHandshake, 
//   FaSearch, 
//   FaUsers,
//   FaBook,
//   FaHandHoldingHeart,
//   FaLock,
//   FaUserCheck
// } from "react-icons/fa";

// const Aboutus = () => {
//   return (
//     <div className={styles.container}>
//       {/* Hero Section */}
//       <div className={styles.heroSection}>
//         <div className={styles.heroContent}>
//           <h1>About Akhil Bhartiya Kunbi Samaj</h1>
//           <p>Preserving traditions, forging connections, building futures</p>
//         </div>
//       </div>

//       {/* About Content */}
//       <div className={styles.contentSection}>
//         <div className={styles.textSection}>
//           <div className={styles.main}>
//             <p className={styles.text}>
//               <FaBook className={styles.icon} />
//               Welcome to Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, a dedicated platform committed to bringing together like-minded 
//               individuals from the Kunbi community. Our mission is to help you find a life partner who shares your values, beliefs, and aspirations, 
//               ensuring a strong foundation for a happy and fulfilling marriage.
//             </p>
//             <p>
//               <FaHandHoldingHeart className={styles.icon} />
//               We take pride in preserving cultural heritage while embracing modern matchmaking methods to create meaningful and lasting relationships. 
//               We understand that finding the right match is one of the most important decisions in life, which is why we provide a trusted and secure 
//               space for genuine connections.
//             </p>
//             <p>
//               <FaUsers className={styles.icon} />
//               Beyond matchmaking, our platform fosters community bonding, upholds cultural traditions, and encourages meaningful relationships built 
//               on trust and compatibility. We strive to create an environment where individuals and families can connect, interact, and celebrate the 
//               essence of togetherness.
//             </p>
//             <p>
//               <FaLock className={styles.icon} />
//               Join us today and take the first step toward a beautiful and lasting relationship! With our commitment to authenticity, privacy, and personalized 
//               matchmaking, we ensure a seamless and enriching experience as you embark on this incredible journey of finding love and happiness.
//             </p>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className={styles.valuesSection}>
//           <div className={styles.sectionHeader}>
//             <h2>Our Core Values</h2>
//             <div className={styles.divider}></div>
//           </div>
          
//           <div className={styles.valuesGrid}>
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>
//                 <FaShieldAlt />
//               </div>
//               <h3>Trust & Security</h3>
//               <p>Verified profiles and strong privacy settings ensure a safe matchmaking experience.</p>
//             </div>
            
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>
//                 <FaHeart />
//               </div>
//               <h3>Authenticity</h3>
//               <p>We believe in real connections with genuine profiles for meaningful relationships.</p>
//             </div>
            
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>
//                 <FaGlobeAsia />
//               </div>
//               <h3>Respect for Diversity</h3>
//               <p>Celebrating diverse cultures and backgrounds to find matches that align with your traditions.</p>
//             </div>
            
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>
//                 <FaHandshake />
//               </div>
//               <h3>Commitment to Service</h3>
//               <p>Rooted in Kunbi culture, we respect traditions while providing modern matchmaking.</p>
//             </div>
            
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>
//                 <FaSearch />
//               </div>
//               <h3>Easy Matchmaking</h3>
//               <p>Smart search filters and compatibility-based suggestions for effortless partner search.</p>
//             </div>
            
//             <div className={styles.valueCard}>
//               <div className={styles.valueIcon}>
//                 <FaUserCheck />
//               </div>
//               <h3>Respect & Inclusivity</h3>
//               <p>A welcoming, respectful, and supportive space for all community members.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;


import React from 'react';
import styles from './Aboutus.module.css';

const Aboutus = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>About Akhil Bhartiya Kunbi Samaj</h1>
          <p>Preserving traditions, forging connections, building futures</p>
          <div className={styles.decorativeElements}>
            <div className={styles.element1}></div>
            <div className={styles.element2}></div>
            <div className={styles.element3}></div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className={styles.contentSection}>
        <div className={styles.textSection}>
          <div className={styles.main}>
            <div className={styles.textBlock}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
              </div>
              <div className={styles.textContent}>
                <h3>Our Mission</h3>
                <p>Welcome to Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, a dedicated platform committed to bringing together like-minded individuals from the Kunbi community. Our mission is to help you find a life partner who shares your values, beliefs, and aspirations, ensuring a strong foundation for a happy and fulfilling marriage.</p>
              </div>
            </div>
            
            <div className={styles.textBlock}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                  </svg>
                </div>
              </div>
              <div className={styles.textContent}>
                <h3>Cultural Heritage</h3>
                <p>We take pride in preserving cultural heritage while embracing modern matchmaking methods to create meaningful and lasting relationships. We understand that finding the right match is one of the most important decisions in life, which is why we provide a trusted and secure space for genuine connections.</p>
              </div>
            </div>
            
            <div className={styles.textBlock}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <div className={styles.textContent}>
                <h3>Community Bonding</h3>
                <p>Beyond matchmaking, our platform fosters community bonding, upholds cultural traditions, and encourages meaningful relationships built on trust and compatibility. We strive to create an environment where individuals and families can connect, interact, and celebrate the essence of togetherness.</p>
              </div>
            </div>
            
            <div className={styles.textBlock}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              <div className={styles.textContent}>
                <h3>Secure Environment</h3>
                <p>Join us today and take the first step toward a beautiful and lasting relationship! With our commitment to authenticity, privacy, and personalized matchmaking, we ensure a seamless and enriching experience as you embark on this incredible journey of finding love and happiness.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <div className={styles.sectionHeader}>
            <h2>Our Core Values</h2>
            <div className={styles.divider}></div>
            <p>Guiding principles that shape our community and services</p>
          </div>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16s-1.5-2-4-2-4 2-4 2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3>Trust & Security</h3>
              <p>Verified profiles and strong privacy settings ensure a safe matchmaking experience.</p>
            </div>
          
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3>Authenticity</h3>
              <p>We believe in real connections with genuine profiles for meaningful relationships.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Respect for Diversity</h3>
              <p>Celebrating diverse cultures and backgrounds to find matches that align with your traditions.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Commitment to Service</h3>
              <p>Rooted in Kunbi culture, we respect traditions while providing modern matchmaking.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>Easy Matchmaking</h3>
              <p>Smart search filters and compatibility-based suggestions for effortless partner search.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Respect & Inclusivity</h3>
              <p>A welcoming, respectful, and supportive space for all community members.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className={styles.communitySection}>
        <div className={styles.communityContent}>
          <div className={styles.communityText}>
            <h2>Join Our Growing Community</h2>
            <p>Become part of a vibrant network that celebrates our heritage while building modern connections. Our community is growing every day with members who value tradition, family, and meaningful relationships.</p>
            <div className={styles.statsContainer}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>5000+</div>
                <div className={styles.statLabel}>Registered Members</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>1200+</div>
                <div className={styles.statLabel}>Successful Matches</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>200+</div>
                <div className={styles.statLabel}>Community Events</div>
              </div>
            </div>
          </div>
          <div className={styles.communityImage}></div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;