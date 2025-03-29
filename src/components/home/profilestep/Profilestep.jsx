import React, { useEffect } from 'react';
import styles from './Timeline.module.css';

function Profilestep() {
  const timelineItems = [
    { year: '📝', title: 'Create your profile', text: "Looking for your life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and take the first step toward a meaningful connection!" },
    { year: '🔍', title: 'Find Compatible', text: "Looking for a compatible life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and find the perfect match for a meaningful connection!" },
    { year: '💬', title: 'Get to know them', text: "Looking for a compatible life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and get to know them for a meaningful connection!" },
    { year: '❤️', title: 'Find love!', text: "Looking for a compatible life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and find love that lasts a lifetime!" },
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