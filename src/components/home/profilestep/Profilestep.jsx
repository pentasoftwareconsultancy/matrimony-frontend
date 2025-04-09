import React, { useEffect } from 'react';
import styles from './Timeline.module.css';

function Profilestep() {
  const timelineItems = [
    { year: '📝', title: 'Create your profile', text:"Ready to begin your journey toward love? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal and take the first step toward a lifelong connection."},
    { year: '🔍', title: 'Find Compatible', text: "Discover compatible matches tailored for you on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal and take a step closer to finding your perfect partner."},
    { year: '💬', title: 'Get to know them', text: "Connect and get to know potential life partners in a meaningful way through Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal." },
    { year: '❤️', title: 'Find love!', text: "Experience the joy of finding true love and build a beautiful future together with the help of Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal." },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.timelineItem}`);

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add(styles.inView);
        }
      });
    }

    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);

    return () => {
      window.removeEventListener('load', callbackFunc);
      window.removeEventListener('resize', callbackFunc);
      window.removeEventListener('scroll', callbackFunc);
    };
  }, []);

  return (
    <div className={styles.App}>
      <section className={styles.timeline}>
        <h2 className={styles.titleprofile}>Create Your Profile Now...</h2>
        <p className={styles.subtitle}>Create Your Profile Today and Begin Your Journey to Finding True Love and Lasting Happiness!</p>

        <ul>
          {timelineItems.map((item, index) => (
            <li key={index} className={styles.timelineItem}>
              <div className={styles.main}>
                <time className={styles.timemain}>{item.year}</time>
                <div className={styles.titlemain}>{item.title}</div>
                <div className={styles.text}>{item.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Profilestep;