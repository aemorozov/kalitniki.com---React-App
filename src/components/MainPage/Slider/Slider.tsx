import classes from './Slider.module.css';
import Image from 'next/image';
import heroBlock1 from '../../../img/mainPage/slider/HeroBlock1.jpeg';
import heroBlock2 from '../../../img/mainPage/slider/HeroBlock2.jpeg';
import heroBlock3 from '../../../img/mainPage/slider/HeroBlock3.jpeg';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [heroBlock1, heroBlock2, heroBlock3];
  const imageClasses = [classes.firstImg, classes.secondImg, classes.thirdImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            />
          </div>
        ))}

        <div className={classes.textAria}>Текст</div>
      </div>
    </div>
  );
};
