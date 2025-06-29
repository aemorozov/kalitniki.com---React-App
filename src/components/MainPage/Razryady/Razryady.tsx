import React from 'react';
import Image from 'next/image';
import styles from './Razryady.module.css';

import img1 from '/public/img/mainPage/razryadi/624a058fadac0d6ba512a126c6bcab3b.jpeg';
import img2 from '/public/img/mainPage/razryadi/a4e7f235808aafac4df84c7ed14fb90a.jpeg';
import img3 from '/public/img/mainPage/razryadi/088edf0157c22276f535233deb19efd5.jpeg';

const razryadyData = [
  {
    img: img1,
    header: 'Мужской разряд',
    tags: ['Русская парная', 'Бассейн', 'Хамам'],
    schedule: [
      ['Понедельник', '11:00 — 23:00'],
      ['Вторник', '13:00 — 23:00'],
      ['Среда', '11:00 — 23:00'],
      ['Четверг', '11:00 — 23:00'],
      ['Пятница', '11:00 — 23:00'],
      ['Суббота', '09:00 — 23:00'],
      ['Воскресенье', '09:00 — 23:00']
    ],
    price: 'от 1950 Р / 2 часа',
    moreButton: ''
  },
  {
    img: img2,
    header: 'Высший мужской разряд',
    tags: ['Русская парная', 'Бассейн', 'Купель'],
    schedule: [
      ['Среда', '11:00 — 23:00'],
      ['Четверг', '11:00 — 23:00'],
      ['Пятница', '11:00 — 23:00'],
      ['Суббота', '09:00 — 23:00'],
      ['Воскресенье', '09:00 — 23:00']
    ],
    price: 'от 2500 Р / 2 часа',
    moreButton: ''
  },
  {
    img: img3,
    header: 'Женский разряд',
    tags: ['Русская парная', 'Бассейн', 'Хамам'],
    schedule: [
      ['Понедельник', '13:00 — 23:00'],
      ['Вторник', '11:00 — 23:00']
    ],
    price: 'от 1950 Р / 3 часа',
    moreButton: ''
  }
];

export const Razryady = () => {
  return (
    <div className={'classicBlock'}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Калитниковские бани</h2>
          <h3 className={'headerH3'}>Общественные разряды</h3>
        </div>
        <div className={styles.forMobileScroll}>
          <div className={styles.mainBlock}>
            {razryadyData.map((razryad) => {
              return (
                <div className={styles.block} key={razryad.header}>
                  <div className={styles.divForImg}>
                    <Image
                      src={razryad.img}
                      className={styles.img}
                      alt={razryad.header}
                      title={razryad.header}
                      fill
                    />
                  </div>
                  <div className={styles.descriptionBlock}>
                    <div>
                      <h2 className={styles.header}>{razryad.header}</h2>
                      <div className={'tags'}>
                        {razryad.tags.map((tag) => {
                          return (
                            <div className={'tag'} key={tag}>
                              <p className={'tagP'}>{tag}</p>
                            </div>
                          );
                        })}
                      </div>
                      <div className={styles.scheduleBlock}>
                        {razryad.schedule.map((day) => {
                          return (
                            <div className={styles.row} key={day[0]}>
                              <p className={styles.scheduleDay}>{day[0]}</p>
                              <p className={styles.scheduleTime}>{day[1]}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <div className={styles.priceBlock}>
                        <p className={styles.price}>{razryad.price}</p>
                      </div>
                      <div className={styles.moreButtonBlock}>
                        <button className={'moreButton'}>Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.bottomDescription}>
          <p>
            Каждые <span className={styles.bottomDescriptionSpan}>40</span>{' '}
            минут — свежий{' '}
            <span className={styles.bottomDescriptionSpan}>ароматный</span> пар
            {window.innerWidth < 767 ? <br /> : ''}на{' '}
            <span className={styles.bottomDescriptionSpan}>травах</span> в наших
            парных!
          </p>
        </div>
      </div>
    </div>
  );
};
