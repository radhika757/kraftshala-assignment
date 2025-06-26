import { useEffect, useState } from 'react';
import styles from './CountDownTimer.module.css';

const CountdownTimer = () => {
const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 8);
    targetDate.setHours(23, 55, 41); // match image

    const difference = +targetDate - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
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

  return (
    <div className={styles.timerContainer}>
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className={styles.timeBoxes}>
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="time-box">
            <span className="value">{value}</span>
            <span className="label">{label.toUpperCase()}</span>
          </div>
        ))}
      </div>

      <div className={styles.socials}>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-pinterest-p"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  );
};

export default CountdownTimer;
