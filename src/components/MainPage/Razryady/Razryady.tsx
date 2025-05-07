import React from 'react';
import Image from 'next/image';
import classes from './Razryady.module.css';

import img1 from '/public/img/mainPage/razryadi/624a058fadac0d6ba512a126c6bcab3b.jpeg';
import img2 from '/public/img/mainPage/razryadi/a4e7f235808aafac4df84c7ed14fb90a.jpeg';
import img3 from '/public/img/mainPage/razryadi/088edf0157c22276f535233deb19efd5.jpeg';

export const Razryady = () => {
  return (
    <div className={classes.classicBlock}>
      <div className={classes.contentBlock}>
        <div className={classes.headers}>
          <h2 className={classes.headerH2}>Калитниковские бани</h2>
          <h3 className={classes.headerH3}>Общественные разряды</h3>
        </div>
        <div className={classes.mainBlock}>
          <div className={classes.block}>
            <div className={classes.divForImg}>
              <Image src={img1} className={classes.img} alt="" title="" fill />
            </div>
            <div className={classes.descriptionBlock}>
              <div>
                <h2 className={classes.header}>Мужской разряд</h2>
                <div className={classes.tags}>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Русская парная</p>
                  </div>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Бассейн</p>
                  </div>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Хамам</p>
                  </div>
                </div>
                <div className={classes.scheduleBlock}>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Понедельник</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Вторник</p>
                    <p className={classes.scheduleTime}>13:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Среда</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Четверг</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Пятница</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Суббота</p>
                    <p className={classes.scheduleTime}>09:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Воскресенье</p>
                    <p className={classes.scheduleTime}>09:00 — 23:00</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.priceBlock}>
                  <p className={classes.price}>От 1950 &#8381;/2 часа</p>
                  <p className={classes.priceDescription}>
                    После 2х часов действует поминутная тарификация
                  </p>
                </div>
                <div className={classes.moreButtonBlock}>
                  <button className={classes.moreButton}>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.block}>
            <div className={classes.divForImg}>
              <Image src={img2} className={classes.img} alt="" title="" fill />
            </div>
            <div className={classes.descriptionBlock}>
              <div>
                <h2 className={classes.header}>Высший мужской разряд</h2>
                <div className={classes.tags}>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Русская парная</p>
                  </div>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Бассейн</p>
                  </div>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Купель</p>
                  </div>
                </div>
                <div className={classes.scheduleBlock}>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Среда</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Четверг</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Пятница</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Суббота</p>
                    <p className={classes.scheduleTime}>09:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Воскресенье</p>
                    <p className={classes.scheduleTime}>09:00 — 23:00</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.priceBlock}>
                  <p className={classes.price}>От 2500 &#8381;/2 часа</p>
                  <p className={classes.priceDescription}>
                    После 2х часов действует поминутная тарификация
                  </p>
                </div>
                <div className={classes.moreButtonBlock}>
                  <button className={classes.moreButton}>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.block}>
            <div className={classes.divForImg}>
              <Image src={img3} className={classes.img} alt="" title="" fill />
            </div>
            <div className={classes.descriptionBlock}>
              <div>
                <h2 className={classes.header}>Женский разряд</h2>
                <div className={classes.tags}>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Русская парная</p>
                  </div>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Бассейн</p>
                  </div>
                  <div className={classes.tag}>
                    <p className={classes.tagP}>Хамам</p>
                  </div>
                </div>
                <div className={classes.scheduleBlock}>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Понедельник</p>
                    <p className={classes.scheduleTime}>13:00 — 23:00</p>
                  </div>
                  <div className={classes.row}>
                    <p className={classes.scheduleDay}>Вторник</p>
                    <p className={classes.scheduleTime}>11:00 — 23:00</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={classes.priceBlock}>
                  <p className={classes.price}>От 1950 &#8381;/3 часа</p>
                  <p className={classes.priceDescription}>
                    После 2х часов действует поминутная тарификация
                  </p>
                </div>
                <div className={classes.moreButtonBlock}>
                  <button className={classes.moreButton}>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
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
