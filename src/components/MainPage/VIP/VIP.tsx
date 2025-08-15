import styles from './VIP.module.css';
import classNames from 'classnames';
import { useState } from 'react';

import Image from 'next/image';
import turin from '/public/img/mainPage/vip/turin.jpg';
import comfort from '/public/img/mainPage/vip/comfort.jpg';
import rimskiy from '/public/img/mainPage/vip/rimskiy.jpg';
import bolshoy from '/public/img/mainPage/vip/bolshoy.jpg';
import maliy from '/public/img/mainPage/vip/maliy.jpg';
import vipBackImg from '/public/img/mainPage/vip/d4d5a7239e7aac5883c5d8bea7488137.png';

const slidesData = [
  {
    img: turin,
    header: 'Турин',
    text: 'Находится в высшем мужском разряде. Лучшее место для встречи c друзьями и близкими между парениями. Небольшой и уютный уголок для отдыха и релакса...',
    labels: ['Для встреч c друзьями', 'Обслуживание по меню', 'Спутниковое TV'],
    plusses: [
      'Вместимость до 6 гостей',
      'Общая площадь 12 м2',
      'Минимальная аренда — 2 часа'
    ],
    price: '2500 P/2 часа',
    description: `Оплачивается дополнительно к входному билету. \n После 2 часов действует поминутная тарификация`,
    button: '#'
  },
  {
    img: comfort,
    header: 'Комфорт',
    text: 'Находится в высшем мужском разряде. Уютный интерьер, комфортные диваны — все для комфортного расслабления между парениями! Для ДР и корпоративов',
    labels: [
      'Для большой компании',
      'Обслуживание по меню',
      'Зона отдыха',
      'Спутниковое TV',
      'Душевая'
    ],
    plusses: [
      'Вместимость до 15 гостей',
      'Общая площадь 19 м2',
      'Минимальная аренда — 2 часа'
    ],
    price: '4000 P/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. \n После 2 часов действует поминутная тарификация',
    button: '#'
  },
  {
    img: rimskiy,
    header: 'Римский',
    text: 'Находится в высшем мужском разряде. Оформлен в Римском стиле. Уютный тихий VIP-кабинет. Подходит для уединения и расслабления, общения.',
    labels: [
      'Для уединения и отдыха',
      'Обслуживание по меню',
      'Персональные шкафчики',
      'Спутниковое TV'
    ],
    plusses: [
      'Вместимость до 8 гостей',
      'Общая площадь 15 м2',
      'Минимальная аренда — 2 часа'
    ],
    price: '3300 P/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. \n После 2 часов действует поминутная тарификация',
    button: '#'
  },
  {
    img: bolshoy,
    header: 'Большой',
    text: 'Находится в мужском разряде. Самый популярный кабинет. Можно уединиться от общего зала и пообщаться в кругу близких. Тихо!!!! Выбор управы!! Для ДР и копоративов',
    labels: [
      'Самый популярный',
      'Для праздников',
      'Обслуживание по меню',
      'Большое пространство',
      'Спутниковое TV'
    ],
    plusses: [
      'Вместимость до 8 гостей',
      'Общая площадь 15 м2',
      'Минимальная аренда — 2 часа'
    ],
    price: '2750 P/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. \n После 2 часов действует поминутная тарификация',
    button: '#'
  },
  {
    img: maliy,
    header: 'Малый',
    text: 'Находится в мужском разряде. Самый маленький кабинет. Подходит для небольшой компании. Идеален для переговоров и небольших мероприятий. Подходит для отдыха между процедурами',
    labels: [
      'Для маленькой компании',
      'Обслуживание по меню',
      'Спутниковое TV',
      'Выход в парную'
    ],
    plusses: [
      'Вместимость до 6 гостей',
      'Общая площадь 12 м2',
      'Минимальная аренда — 2 часа'
    ],
    price: '2200 P/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. \n После 2 часов действует поминутная тарификация',
    button: '#'
  }
];

export const VIP = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.classicBlock}>
      <Image
        src={vipBackImg}
        alt="Woman"
        className={styles.backgroundImageVIP}
      />
      <div className={styles.contentBlockVIP}>
        <div className={styles.headers}>
          <h2 className={'headerH2'}>VIP-кабинеты</h2>
          <h3 className={'headerH3'}>
            Для отдыха <br /> в компании близких
          </h3>
        </div>
        <div className={styles.contentBlock}>
          <ul className={styles.names}>
            {slidesData.map((slide, index) => {
              return (
                <li
                  className={classNames(
                    styles.name,
                    active === index ? styles.nameActive : ''
                  )}
                  key={slide.header}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  <img
                    src="/img/header/Icon_container.svg"
                    alt="text"
                    className={styles.leaf}
                  />
                  {slide.header}
                </li>
              );
            })}
          </ul>
          <div className={styles.slides}>
            {slidesData.map((slide, index) => {
              return (
                <div
                  className={classNames(
                    styles.slidesBlock,
                    styles.opacity0,
                    active === index ? styles.opacity1 : ''
                  )}
                  key={slide.header}
                >
                  <Image
                    src={slide.img}
                    alt="Turin"
                    className={styles.image}
                  ></Image>
                  <div className={styles.textBlock}>
                    <h3 className={styles.header}>{slide.header}</h3>
                    <p className={styles.text}>{slide.text}</p>
                    <div className={styles.labels}>
                      {slide.labels.map((label) => {
                        return (
                          <div className={styles.label} key={label}>
                            {label}
                          </div>
                        );
                      })}
                    </div>
                    <ul className={styles.plusses}>
                      {slide.plusses.map((plus) => {
                        return (
                          <li className={styles.plus} key={plus}>
                            <img
                              src="/img/mainPage/vip/Bullet.svg"
                              className={styles.list}
                              alt="list element"
                            />
                            {plus}
                          </li>
                        );
                      })}
                    </ul>
                    <p className={styles.price}>{slide.price}</p>
                    <p className={styles.description}>{slide.description}</p>
                    <button className={styles.button}>Подробнее</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.bottomDescriptionVIP}>
            <p>
              Кабинеты находятся в мужском и высшем мужском разрядах. Каждый
              кабинет готовится специально к вашему визиту c заботой и вниманием
              к деталям
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
