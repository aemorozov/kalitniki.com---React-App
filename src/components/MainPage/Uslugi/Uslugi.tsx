import Image from 'next/image';
import styles from './Uslugi.module.css';

import uslugiImg3 from '/public/img/mainPage/uslugi/img3.jpeg';
import mobileImg1 from '/public/img/mainPage/uslugi/mobileImg1.jpg';
// import mobileImg2 from '/public/img/mainPage/uslugi/mobileImg2.jpg';
// import mobileImg3 from '/public/img/mainPage/uslugi/mobileImg3.jpg';
// import mobileImg4 from '/public/img/mainPage/uslugi/mobileImg4.jpg';
// import mobileImg5 from '/public/img/mainPage/uslugi/mobileImg5.jpg';
import listItem from '/public/img/mainPage/vip/Bullet.svg';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

export const Uslugi = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Проверяем, что код выполняется на клиенте
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <section
      className={'classicBlock Uslugi - Dlya zdorovya i vosstanovleniya'}
    >
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Услуги</h2>
          <h3 className={'headerH3'}>
            Для здоровья <br />и восстановления
          </h3>
        </div>
        <div className={styles.slides}>
          <div className={styles.slidesBlock + ' ' + styles.reverse}>
            <Image
              src={windowWidth < 767 ? mobileImg1 : uslugiImg3}
              alt="img"
              className={styles.image}
            ></Image>
            <div className={styles.textBlock + ' ' + styles.textBlockReverse}>
              <h3 className={styles.header}>Услуги для тела</h3>
              {windowWidth < 768 ? (
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
                {windowWidth < 768 ? (
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
                  <Image
                    src={listItem}
                    className={styles.list}
                    alt="list element"
                  ></Image>
                  Фирменное {windowWidth < 768 ? '' : 'контрастное'} парение
                </li>
                <li className={styles.plus}>
                  <Image
                    src={listItem}
                    className={styles.list}
                    alt="list element"
                  ></Image>
                  Оздоровительные процедуры
                </li>
                <li className={styles.plus}>
                  <Image
                    src={listItem}
                    className={styles.list}
                    alt="list element"
                  ></Image>
                  Уход по телу
                </li>
              </ul>
              <p className={styles.price}>
                от 1500 P{windowWidth < 768 ? '' : '/2 часа'}
              </p>
              <p
                className={classNames(
                  styles.description,
                  `${windowWidth < 768 ? styles.displayNone : ''}`
                )}
              >
                Прогреваем и наполняем жизненной энергией, снимаем напряжение
              </p>
              <button className={'moreButton'}>Подробнее</button>
            </div>
          </div>
        </div>
        <div className={classNames('bottomDescription')}>
          {windowWidth < 768 ? (
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
