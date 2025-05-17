import Image from 'next/image';
import styles from './Uslugi.module.css';

import uslugiImg3 from '/public/img/mainPage/uslugi/img3.jpeg';
import listItem from '/public/img/mainPage/vip/Bullet.svg';

export const Uslugi = () => {
  return (
    <section
      className={'classicBlock  Uslugi - Dlya zdorovya i vosstanovleniya'}
    >
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Услуги</h2>
          <h3 className={'headerH3'}>
            Для здоровья <br />и восстановления
          </h3>
        </div>
        <div className={'slides'}>
          <div className={styles.slidesBlock + ' ' + styles.reverse}>
            <Image
              src={uslugiImg3}
              alt="Turin"
              className={styles.image}
            ></Image>
            <div className={styles.textBlock + ' ' + styles.textBlockReverse}>
              <h3 className={styles.header}>Услуги для тела</h3>
              <p className={styles.text}>
                Мы разработали программы, позволяющие восстановить здоровье
                тела, не выбиваясь из плотного графика города. У нас работают
                профессиональные пармейстеры — банщики и мастера массажа
              </p>
              <div className={styles.labels}>
                <div className={styles.label}>Индивидуально</div>
                <div className={styles.label}>Профессионально</div>
                <div className={styles.label}>С любовью</div>
                <div className={styles.label}>Мягкий пар</div>
                <div className={styles.label}>Ароматы трав</div>
                <div className={styles.label}>Забота рук</div>
              </div>
              <ul className={styles.plusses}>
                <li className={styles.plus}>
                  <Image
                    src={listItem}
                    className={styles.list}
                    alt="list element"
                  ></Image>
                  Фирменное контрастное парение
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
              <p className={styles.price}>От 1500 P/2 часа</p>
              <p className={styles.description}>
                Прогреваем и наполняем жизненной энергией, снимаем напряжение
              </p>
              <button className={styles.button}>Все услуги</button>
            </div>
          </div>
        </div>
        <div className={'bottomDescription'}>
          <p>
            У нас работают профессиональные пармейстеры — банщики и мастера
            массажа, которые сделают отдых не только приятным, но и
            оздоравливающим!
          </p>
        </div>
      </div>
    </section>
  );
};
