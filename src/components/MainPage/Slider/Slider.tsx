import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import heroBlock1 from '../../../img/mainPage/slider/HeroBlock1.jpeg';
import heroBlock2 from '../../../img/mainPage/slider/HeroBlock2.jpeg';
import heroBlock3 from '../../../img/mainPage/slider/HeroBlock3.jpeg';
import classes from './Slider.module.css';

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [heroBlock1, heroBlock2, heroBlock3];
  const imageClasses = [classes.firstImg, classes.secondImg, classes.thirdImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.mainBlock}>
      <div className={classes.addLine}>
        {images.map((image, index) => (
          <div
            key={index}
            className={classNames(classes.slide, {
              [classes.opacity1]: index === activeIndex
            })}
          >
            <Image
              src={image}
              className={classNames(classes.image, imageClasses[index])}
              alt={`main photo ${index + 1}`}
              priority={index === activeIndex}
            ></Image>
            <div className={classes.gradient}></div>
          </div>
        ))}

        <div className={classes.textAria}>
          <h1 className={classes.textAriaH1}>Банный комплекс Калитники</h1>
          <h2 className={classes.textAriaH2}>
            Погрузитесь в атмосферу традиционного банного парения и
            гостеприимства, мягкого пара в центре Москвы
          </h2>
          <button className={classes.button}>Связаться с нами</button>
          <div className={classes.textAriaPBlock}>
            <h3 className={classes.textAriaP}>Москва,</h3>
            <h3 className={classes.textAriaP}>
              Большая Калитниковская, дом 42
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
