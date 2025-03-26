import React, { useEffect, useState } from 'react';
import styles from './Timeline.module.css'; // Import the CSS Module

function Profilestep() {
  const timelineItems = [
    { year: '📝', title: 'Create your profile', text: "Looking for your life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and take the first step toward a meaningful connection!" },
    { year: '🔍', title: 'Find Compatible', text: "Looking for a compatible life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and find the perfect match for a meaningful connection!"},
    { year: '💬', title: 'Get to know them', text:"Looking for a compatible life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and get to know them for a meaningful connection!" },
    { year: '❤️', title: 'Find love!', text: "Looking for a compatible life partner? Create your profile on Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and find love that lasts a lifetime!"},
    // { year: '1937', text: 'Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus.' },
    // { year: '1940', text: 'Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar.' },
    // { year: '1943', text: 'In mattis elit vitae odio posuere, nec maximus massa varius.' },
    // { year: '1946', text: 'In mattis elit vitae odio posuere, nec maximus massa varius.' },
    // { year: '1956', text: 'In mattis elit vitae odio posuere, nec maximus massa varius.' },
    // { year: '1957', text: 'In mattis elit vitae odio posuere, nec maximus massa varius.' },
    // { year: '1967', text: 'Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta.' },
    // { year: '1977', text: 'Vestibulum porttitor lorem sed pharetra dignissim.' },
    // { year: '1985', text: 'In mattis elit vitae odio posuere, nec maximus massa varius.' },
    // { year: '2000', text: 'In mattis elit vitae odio posuere, nec maximus massa varius.' },
    // { year: '2005', text: 'In mattis elit vitae odio posuere, nec maximus massa varius.' },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.timelineItem}`);

    // Check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Add the 'in-view' class when the element is in the viewport
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
      {/* <section className={styles.intro}>
        <div className={styles.container}>
        <h2 className={styles.title}>Create Your Profile Now.....</h2>
        <p className={styles.subtitle}>Create Your Profile Today and Begin Your Journey to Finding True Love and Lasting Happiness!</p>

          <p>
            Timeline v2{' '}
            <a href="https://codepen.io/tutsplus/pen/zYQqPYG" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
        </div>
      </section> */}

      <section className={styles.timeline}>
      <h2 className={styles.titleprofile}>Create Your Profile Now.....</h2>
        <p className={styles.subtitle}>Create Your Profile Today and Begin Your Journey to Finding True Love and Lasting Happiness!</p>

        <ul>
          {timelineItems.map((item, index) => (
            <li key={index} className={styles.timelineItem}>
              <div className={styles.main}>
                <time className={styles.timemain}>{item.year}</time>
               <div className={styles.titlemain}> {item.title}</div>
               <div className={styles.text}> {item.text}</div>
               
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* <footer className={styles.pageFooter}>
        <span>made by </span>
        <a href="https://georgemartsoukos.com/" target="_blank" rel="noopener noreferrer">
          <img
            width="24"
            height="24"
            src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg"
            alt="George Martsoukos logo"
          />
        </a>
      </footer> */}
    </div>
  );
}

export default Profilestep;
