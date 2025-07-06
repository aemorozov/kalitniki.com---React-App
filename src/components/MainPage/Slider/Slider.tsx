import styles from './Slider.module.css';
import Image from 'next/image';
import heroBlock1 from '/public/img/mainPage/slider/HeroBlock1.jpeg';
import heroBlock2 from '/public/img/mainPage/slider/HeroBlock2.jpeg';
import heroBlock3 from '/public/img/mainPage/slider/HeroBlock3.jpeg';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [heroBlock1, heroBlock2, heroBlock3];
  const imageStyles = [styles.firstImg, styles.secondImg, styles.thirdImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.mainBlock}>
      <div className={styles.addLine}>
        {images.map((image, index) => (
          <div
            key={index}
            className={classNames(styles.slide, {
              [styles.opacity1]: index === activeIndex
            })}
          >
            <Image
              src={image}
              className={classNames(styles.image, imageStyles[index])}
              alt={`main photo ${index + 1}`}
              priority={index === activeIndex}
            ></Image>
            <div className={styles.gradient}></div>
          </div>
        ))}

        <div className={styles.textAria}>
          <h1 className={styles.textAriaH1}>Банный комплекс Калитники</h1>
          <h2 className={styles.textAriaH2}>
            Погрузитесь в атмосферу традиционного банного парения и
            гостеприимства, мягкого пара в центре Москвы
          </h2>
          <button className={styles.button}>Связаться с нами</button>
          <div className={styles.textAriaPBlock}>
            <p className={styles.textAriaP}>
              Москва, Большая Калитниковская, дом 42
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
