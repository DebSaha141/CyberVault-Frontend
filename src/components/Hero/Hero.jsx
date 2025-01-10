import React from 'react';
import styles from './styles/Hero.module.scss';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <div className={styles['container']}>
      <div className={styles['navbar']}>

      </div>
      <div className={styles['hero-container']}>
          <div className={styles['spline-object-container']}>
          <Spline className={styles['spline-object']} scene="https://prod.spline.design/iG8YgDzUmhycJDqS/scene.splinecode" />
          </div>
          <div className={styles['second-div']}>
          </div>
      </div>
      <div className={styles['footer']}>
        
      </div>
      </div>
  );
}

export default Hero;