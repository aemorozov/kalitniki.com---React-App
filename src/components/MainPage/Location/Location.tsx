// components/Location.tsx
import React from 'react';
import classes from './Location.module.css';
import map from '/public/img/mainPage/map/map.png';
import Image from 'next/image';
import listItem from '/public/img/mainPage/vip/Bullet.svg';

const Location = () => {
  return (
    <section className={'classicBlock' + ' ' + classes.mapBlock}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Карта</h2>
          <h3 className={'headerH3'}>Как нас найти</h3>
        </div>
        {/* <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.info}>
              <h3 className={classes.address}>Большая Калитниковская, дом 42</h3>
              <p className={classes.description}>
                Удобно добираться на личном и общественном транспорте, мы
                находимся между садовым кольцом и ТТК, рядом 2 станции метро и 2
                диаметра...
              </p>

              <div className={classes.tags}>
                <span>Бесплатная парковка</span>
                <span>Рядом с центром</span>
                <span>Ежедневно</span>
              </div>

              <ul className={classes.metroList}>
                <li>
                  <span className={`${classes.circle} ${classes.red}`}></span>{' '}
                  Пролетарская, 21 мин
                </li>
                <li>
                  <span className={`${classes.circle} ${classes.orange}`}></span>{' '}
                  Марксистская, 23 мин
                </li>
                <li>
                  <span className={`${classes.circle} ${classes.purple}`}></span>{' '}
                  Таганская, 21 мин
                </li>
                <li>
                  <span className={`${classes.circle} ${classes.pink}`}></span>{' '}
                  Платформа Калитники, 13 мин
                </li>
              </ul>

              <p className={classes.tip}>
                Откройте ваш навигатор и найдите оптимальный для вас маршрут
              </p>

              <button className={classes.button}>Проложить маршрут</button>
            </div>

            <div className={classes.map}>
              <Image src={map} alt="Карта" />
            </div>
          </div>
        </div> */}
        <div className={classes.slides}>
          <div className={classes.slidesBlock}>
            <Image src={map} alt="map" className={classes.image}></Image>
            <div className={classes.textBlock}>
              <h3 className={classes.header}>Большая Калитниковская, дом 42</h3>
              <p className={classes.text}>
                Удобно добираться на личном и общественном транспорте, мы
                находимся между садовым кольцом и ТТК, рядом 2 станции метро и 2
                диаметра...
              </p>
              <div className={classes.labels}>
                <div className={classes.label}>Бесплатная парковка</div>
                <div className={classes.label}>Рядом с центром</div>
                <div className={classes.label}>Ежедневно</div>
              </div>
              <ul className={classes.plusses}>
                <li className={classes.plus}>
                  <Image
                    src={listItem}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Пролетарская, 21 мин
                </li>
                <li className={classes.plus}>
                  <Image
                    src={listItem}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Марксистская, 23 мин
                </li>
                <li className={classes.plus}>
                  <Image
                    src={listItem}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Таганская, 21 мин
                </li>
                <li className={classes.plus}>
                  <Image
                    src={listItem}
                    className={classes.list}
                    alt="list element"
                  ></Image>
                  Платформа Калитники, 13 мин
                </li>
              </ul>
              <p className={classes.description}>
                Откройте ваш навигатор и найдите оптимальный <br />
                для вас маршрут
              </p>
              <button className={classes.button}>Проложить маршрут</button>
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

export default Location;
