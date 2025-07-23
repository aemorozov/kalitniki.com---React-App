// components/Location.tsx
import React from 'react';
import classes from './Location.module.css';
import map from '/public/img/mainPage/map/map2.png';
import Image from 'next/image';

import ten from '/public/img/mobileMenu/ten.svg';
import train from '/public/img/mobileMenu/train.svg';
import seven from '/public/img/mobileMenu/seven.svg';
import eight from '/public/img/mobileMenu/eight.svg';

export const Location = () => {
  return (
    <section className={'classicBlock' + ' ' + classes.mapBlock}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Карта</h2>
          <h3 className={'headerH3'}>Как нас найти</h3>
        </div>
        <div className={classes.slides}>
          <div className={classes.slidesBlock}>
            <Image src={map} alt="map" className={classes.image}></Image>
            <div className={classes.textBlock}>
              <h3 className={classes.header}>
                Москва, Большая Калитниковская, дом 42
              </h3>
              <p className={classes.text}>
                Удобно добираться на личном и общественном транспорте. Мы
                находимся между садовым кольцом и ТТК, рядом 3 станции метро и
                платформа Калитники МЦД
              </p>
              <div className={classes.labels}>
                <div className={classes.label}>Бесплатная парковка</div>
                <div className={classes.label}>Рядом с центром</div>
                <div className={classes.label}>Ежедневно</div>
              </div>
              <ul className={classes.plusses}>
                <li className={classes.plus}>
                  <Image
                    src={ten}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Пролетарская, 21 мин
                </li>
                <li className={classes.plus}>
                  <Image
                    src={eight}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Марксистская, 23 мин
                </li>
                <li className={classes.plus}>
                  <Image
                    src={seven}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Таганская, 21 мин
                </li>
                <li className={classes.plus}>
                  <Image
                    src={train}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Платформа Калитники, 13 мин
                </li>
              </ul>

              <button className={classes.button}>Показать на карте</button>
            </div>
          </div>
        </div>
        <div className={classes.bottomDescription}>
          <p>
            Удобное расположение Калитников позволит вам быстрее найти время в{' '}
            <br />
            насыщенном графике для комфортного отдыха
          </p>
        </div>
      </div>
    </section>
  );
};
