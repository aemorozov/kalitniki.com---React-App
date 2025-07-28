import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Uslugi.module.css';

import descktopImg2 from '/public/img/mainPage/uslugi/Photo-1.jpg';
import descktopImg3 from '/public/img/mainPage/uslugi/Photo-2.jpg';
import descktopImg4 from '/public/img/mainPage/uslugi/Photo-3.jpg';
import descktopImg5 from '/public/img/mainPage/uslugi/Photo-4.jpg';
import descktopImg1 from '/public/img/mainPage/uslugi/Photo.jpg';
import mobileImg1 from '/public/img/mainPage/uslugi/mobileImg1.jpg';
import mobileImg2 from '/public/img/mainPage/uslugi/mobileImg2.jpg';
import mobileImg3 from '/public/img/mainPage/uslugi/mobileImg3.jpg';
import mobileImg4 from '/public/img/mainPage/uslugi/mobileImg4.jpg';
import mobileImg5 from '/public/img/mainPage/uslugi/mobileImg5.jpg';

export const Uslugi = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileImages = [
    mobileImg1,
    mobileImg2,
    mobileImg3,
    mobileImg4,
    mobileImg5
  ];
  const desktopImages = [
    descktopImg1,
    descktopImg2,
    descktopImg3,
    descktopImg4,
    descktopImg5
  ];
  const mobileScreenWidth = 768;
  const imgCount =
    windowWidth < mobileScreenWidth
      ? mobileImages.length - 1
      : desktopImages.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        return prevIndex < imgCount ? prevIndex + 1 : (prevIndex = 0);
      });
    }, 3000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <section className={'classicBlock' + ' ' + 'uslugi'}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Услуги</h2>
          <h3 className={'headerH3'}>
            Для здоровья <br />и восстановления
          </h3>
        </div>
        <div className={styles.slides}>
          <div className={classNames(styles.slidesBlock, styles.reverse)}>
            {windowWidth < mobileScreenWidth ? (
              mobileImages.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    alt="img"
                    className={classNames(styles.image, {
                      [styles.opacity1]: index === activeIndex
                    })}
                  ></Image>
                );
              })
            ) : (
              <div className={styles.parentImageDiv}>
                {desktopImages.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      src={image}
                      alt="img"
                      className={classNames(styles.image, {
                        [styles.opacity1]: index === activeIndex
                      })}
                    ></Image>
                  );
                })}
              </div>
            )}
            <div className={styles.textBlock + ' ' + styles.textBlockReverse}>
              <h3 className={styles.header}>Услуги для тела</h3>
              {windowWidth < mobileScreenWidth ? (
                <p className={styles.text}>
                  Программы, позволяющие восстановить здоровье тела, не
                  выбиваясь из плотного графика города
                </p>
              ) : (
                <p className={styles.text}>
                  Мы разработали программы, позволяющие восстановить здоровье
                  тела, не выбиваясь из плотного графика города. У нас работают
                  профессиональные пармейстеры — банщики и мастера массажа
                </p>
              )}

              <div className={styles.labels}>
                {windowWidth < mobileScreenWidth ? (
                  <>
                    <div className={styles.label}>Индивидуально</div>
                    <div className={styles.label}>Профессионально</div>
                    <div className={styles.label}>Мягкий пар</div>
                    <div className={styles.label}>Ароматы трав</div>
                  </>
                ) : (
                  <>
                    <div className={styles.label}>Индивидуально</div>
                    <div className={styles.label}>Профессионально</div>
                    <div className={styles.label}>С любовью</div>
                    <div className={styles.label}>Мягкий пар</div>
                    <div className={styles.label}>Ароматы трав</div>
                    <div className={styles.label}>Забота рук</div>
                  </>
                )}
              </div>
              <ul className={styles.plusses}>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={styles.list}
                    alt="list element"
                  />
                  Фирменное{' '}
                  {windowWidth < mobileScreenWidth ? '' : 'контрастное'} парение
                </li>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={styles.list}
                    alt="list element"
                  />
                  Оздоровительные процедуры
                </li>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={styles.list}
                    alt="list element"
                  />
                  Уход по телу
                </li>
              </ul>
              <p className={styles.price}>
                от 1500 P{windowWidth < mobileScreenWidth ? '' : '/2 часа'}
              </p>

              <button className={'moreButton'}>Подробнее</button>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            'bottomDescription',
            styles.bottomDescriptionUslugi
          )}
        >
          {windowWidth < mobileScreenWidth ? (
            <p>
              У нас работают профессиональные <br />
              пармейстеры и мастера массажа, которые <br />
              сделают отдых не только приятным, <br />
              но и оздоравливающим
            </p>
          ) : (
            <p>
              У нас работают профессиональные пармейстеры — банщики и мастера
              массажа, которые сделают отдых не только приятным, но и
              оздоравливающим!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
