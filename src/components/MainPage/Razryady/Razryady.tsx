import React from 'react';
import Image from 'next/image';
import classes from './Razryady.module.css';

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
    price: 'От 1950 Р / 2 часа',
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
    price: 'От 2500 Р / 2 часа',
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
    price: 'От 1950 Р / 3 часа',
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
        <div className={classes.mainBlock}>
          {razryadyData.map((razryad) => {
            return (
              <div className={classes.block} key={razryad.header}>
                <div className={classes.divForImg}>
                  <Image
                    src={razryad.img}
                    className={classes.img}
                    alt={razryad.header}
                    title={razryad.header}
                    fill
                  />
                </div>
                <div className={classes.descriptionBlock}>
                  <div>
                    <h2 className={classes.header}>{razryad.header}</h2>
                    <div className={'tags'}>
                      {razryad.tags.map((tag) => {
                        return (
                          <div className={'tag'} key={tag}>
                            <p className={'tagP'}>{tag}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className={classes.scheduleBlock}>
                      {razryad.schedule.map((day) => {
                        return (
                          <div className={classes.row} key={day[0]}>
                            <p className={classes.scheduleDay}>{day[0]}</p>
                            <p className={classes.scheduleTime}>{day[1]}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className={classes.priceBlock}>
                      <p className={classes.price}>{razryad.price}</p>
                    </div>
                    <div className={classes.moreButtonBlock}>
                      <button className={'moreButton'}>Подробнее</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.bottomDescription}>
          <p>
            Cвежий пар{' '}
            <span className={classes.bottomDescriptionSpan}>на травах</span>{' '}
            каждые{' '}
            <span className={classes.bottomDescriptionSpan}>40 минут</span> для
            всех гостей наших бань!
          </p>
        </div>
      </div>
    </div>
  );
};
