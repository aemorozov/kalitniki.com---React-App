import Image from 'next/image';
import styles from './Kyhnya.module.css';
import uslugiImg1 from '/public/img/mainPage/kykhnya/event.jpg';
import uslugiImg2 from '/public/img/mainPage/kykhnya/event2.jpg';
import backImage from '/public/img/mainPage/kykhnya/backImage.jpg';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

export const Kyhnya = () => {
  const mobileScreenWidth = 481;
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <section className={'classicBlock' + ' ' + styles.kyhnya}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Кухня и бар</h2>
          <h3 className={'headerH3'}>
            После <br />
            ароматной парилки
          </h3>
        </div>
        <div className={'threeColumns'}>
          <div className={classNames(styles.column, styles.moobileDisplayNone)}>
            <Image
              src={uslugiImg1}
              alt="Uslugi1"
              className={styles.img}
            ></Image>
          </div>
          <div className={classNames(styles.column, styles.moobileDisplayNone)}>
            <Image
              src={uslugiImg2}
              alt="Uslugi2"
              className={styles.img}
            ></Image>
          </div>
          <div className={styles.column}>
            <Image src={backImage} alt="image" className={styles.backImage} />
            <div className={classNames('textBlock', styles.littleTextBlock)}>
              <h3 className={styles.header}>Кухня и бар</h3>
              <p className={styles.text}>
                Большой выбор холодных закусок, напитков, мясных и рыбных блюд,
                домашних настоек{' '}
                {windowWidth < mobileScreenWidth
                  ? ''
                  : 'собственного приготовления. Пельмени, вареники и манты ручной лепки не оставят вас равнодушными'}
              </p>

              <ul className={styles.plusses}>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={'list'}
                    alt="list element"
                  />
                  Блюда на мангале
                </li>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={'list'}
                    alt="list element"
                  />
                  Домашние настойки
                </li>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={'list'}
                    alt="list element"
                  />
                  Лепим сами
                </li>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={'list'}
                    alt="list element"
                  />
                  Свежее разливное пиво
                </li>
                <li className={styles.plus}>
                  <img
                    src="/img/mainPage/vip/Bullet.svg"
                    className={'list'}
                    alt="list element"
                  />
                  Сезонное меню
                </li>
              </ul>
              <button className={classNames('moreButton', styles.moreButton)}>
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames('bottomDescription', styles.bottomDescription)}
      >
        <p>
          Кафе находится в лобби на первом этаже. Здесь можно подождать компанию
          перед отдыхом в бане, расслабиться и подкрепиться после процедур
          {windowWidth < mobileScreenWidth
            ? ''
            : ', посмотреть спортивные матчи'}
        </p>
      </div>
    </section>
  );
};
