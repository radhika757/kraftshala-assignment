import { useEffect, useState } from "react";
import styles from "./CountDownTimer.module.css";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 8);
    targetDate.setHours(23, 55, 41); // match image

    const difference = +targetDate - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

useEffect(() => {
  const stars = document.querySelectorAll(`.${styles.star}`);
  stars.forEach((star) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
  });
}, []);


  return (
    <div className={styles.timerContainer}>
        {/* Rendring multiple random stars */}
      <div className={styles.starrySky}>
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className={styles.star}></div>
        ))}
      </div>
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className={styles.timeBoxes}>
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={styles.timeBox}>
              <span className={styles.value}>{value}</span>
            </div>
            <span className={styles.label}>{label.toUpperCase()}</span>
          </div>
        ))}
      </div>

      <div className={styles.socials}>
        <a
          href="#"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.8l-.4 3h-2.4v7A10 10 0 0 0 22 12z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Pinterest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.2 9.3-.1-.8-.2-2.1 0-3l1.3-5.5s-.3-.6-.3-1.4c0-1.3.8-2.3 1.8-2.3.9 0 1.3.6 1.3 1.3 0 .8-.5 2-0.7 3.1-.2.9.5 1.6 1.4 1.6 1.7 0 3-1.8 3-4.3 0-2.2-1.6-3.7-3.9-3.7-2.7 0-4.3 2-4.3 4.2 0 .8.3 1.6.7 2 .1.1.1.2.1.3l-.3 1.2c0 .2-.1.2-.3.1-1.2-.5-2-2.1-2-3.4 0-2.8 2.1-5.4 6.1-5.4 3.2 0 5.6 2.3 5.6 5.3 0 3.2-2 5.8-4.8 5.8-0.9 0-1.8-.5-2.1-1l-.6 2.2c-.2.9-.8 2-1.2 2.6.9.3 1.9.5 3 .5 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.5.2.8.4 1.2.8s.6.7.8 1.2c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.5-.4.8-.8 1.2s-.7.6-1.2.8c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.5-.2-.8-.4-1.2-.8s-.6-.7-.8-1.2c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.5.4-.8.8-1.2s.7-.6 1.2-.8c.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1M12 0C8.7 0 8.3 0 7 .1 5.7.2 4.7.5 3.9.9c-.9.4-1.6 1-2.4 1.8-.8.8-1.4 1.5-1.8 2.4C-.5 6.3-.2 7.3-.1 8.6 0 9.9 0 10.3 0 12s0 2.1.1 3.4c.1 1.3.4 2.3.8 3.1.4.9 1 1.6 1.8 2.4.8.8 1.5 1.4 2.4 1.8.8.4 1.8.7 3.1.8C8.3 23.8 8.7 24 12 24s3.7 0 5-.1c1.3-.1 2.3-.4 3.1-.8.9-.4 1.6-1 2.4-1.8.8-.8 1.4-1.5 1.8-2.4.4-.8.7-1.8.8-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.4-2.3-.8-3.1-.4-.9-1-1.6-1.8-2.4-.8-.8-1.5-1.4-2.4-1.8-.8-.4-1.8-.7-3.1-.8C15.7.2 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
          </svg>
        </a>
      </div>

      <div className={styles.mountains}>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className={styles.mountainSvg}
        >
          <path
            fill="#1f0f2d"
            fill-opacity="1"
            d="M0,288L120,256C240,224,480,160,720,154.7C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
          <path
            fill="#2b193e"
            fill-opacity="1"
            d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      
    </div>
  );
};

export default CountdownTimer;
