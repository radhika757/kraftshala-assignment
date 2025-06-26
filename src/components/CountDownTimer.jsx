
import styles from './CountDownTimer.module.css';

const CountdownTimer = () => {


  return (
    <div className={styles.timerContainer}>
      <h1>WE'RE LAUNCHING SOON</h1>

      <div className={styles.socials}>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-pinterest-p"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  );
};

export default CountdownTimer;
