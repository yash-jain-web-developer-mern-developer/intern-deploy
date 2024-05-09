import styles from "./Success.module.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Success = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
        navigate('/');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, seconds]);
  return (
    <div className={styles.success}>
      <img className={styles.path70Icon} alt="" src="/path70.svg" />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <img className={styles.image32315Icon} alt="" src="/image-32315@2x.png" />
      <img className={styles.image32510Icon} alt="" src="/image-32510@2x.png" />
      <section className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-1261155216.svg"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.tickRoundParent}>
              <div className={styles.tickRound}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className={styles.successSubmittedParent}>
                <h2 className={styles.successSubmitted}>Success Submitted</h2>
                <div className={styles.congratulationsParent}>
                  <h1 className={styles.congratulations}>Congratulations</h1>
                  <h3 className={styles.yourRequestHas}>
                    Your request has been successfully submitted to us. We will
                    validate your information and reach out to your shortly with
                    updates
                  </h3>
                </div>
              </div>
            </div>
            <footer className={styles.redirectingYouToContainer}>
              <span>
                <span>Redirecting you to Homepage in</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <b className={styles.seconds}>{seconds} Seconds</b>
            </footer>
          </div>
        </div>
      </section>
      <img
        className={styles.successChild}
        alt=""
        src="/group-1171281438@2x.png"
      />
      <div className={styles.maskGroupWrapper}>
        <img className={styles.maskGroupIcon} alt="" />
      </div>
    </div>
  );
};

export default Success;
