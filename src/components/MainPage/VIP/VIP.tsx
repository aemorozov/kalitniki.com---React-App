import Image from 'next/image';
import classes from './VIP.module.css';

import vipBackImg from '/public/img/mainPage/vip/d4d5a7239e7aac5883c5d8bea7488137.png';
import leaf from '/public/img/header/Icon_container.svg';
import turinImg from '/public/img/mainPage/vip/543150a55361764f23d8a1494d0cb30e.jpeg';
import listItem from '/public/img/mainPage/vip/Bullet.svg';

const slidesData = [
  {
    img: turinImg,
    header: 'Турин',
    text: 'Находится в высшем мужском разряде. Лучшее место для встречи c друзьями и близкими между парениями. Небольшой и уютный уголок для отдыха и релакса...',
    labels: ['Для встреч c друзьями', 'Обслуживание по меню', 'Спутниковое TV'],
    plusses: [
      'Вместимость до 6 гостей',
      'Общая площадь 12 м2',
      'Минимальная аренда — 2 часа'
    ],
    price: '2500 P/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. После 2 часов действует поминутная тарификация',
    button: '#'
  },
  {
    img: turinImg,
    header: 'Комфорт',
    text: 'Находится в высшем мужском разряде. Лучшее место для встречи c друзьями и близкими между парениями. Небольшой и уютный уголок для отдыха и релакса...',
    labels: ['Для встреч c друзьями', 'Обслуживание по меню', 'Спутниковое TV'],
    plusses: [
      'Вместимость до 6 гостей',
      'Общая площадь 12 м2',
      'Минимальная аренда — 2 часа'
    ],
    price: '2500 P/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. После 2 часов действует поминутная тарификация',
    button: '#'
  }
];

export const VIP = () => {
  return (
    <div className={classes.classicBlock}>
      <Image
        src={vipBackImg}
        alt="Woman"
        className={classes.backgroundImageVIP}
      ></Image>
      <div className={classes.contentBlockVIP}>
        <div className={classes.headers}>
          <h2 className={classes.headerH2}>VIP-кабинеты</h2>
          <h3 className={classes.headerH3}>
            Для отдыха <br /> в компании близких
          </h3>
        </div>
        <div className={classes.contentBlock}>
          <ul className={classes.names}>
            <li className={classes.name + ' ' + classes.nameActive}>
              <Image src={leaf} alt="text" className={classes.leaf} /> Турин
            </li>
            <li className={classes.name}>
              <Image src={leaf} alt="text" className={classes.leaf} /> Комфорт
            </li>
            <li className={classes.name}>
              <Image src={leaf} alt="text" className={classes.leaf} /> Римский
            </li>
            <li className={classes.name}>
              <Image src={leaf} alt="text" className={classes.leaf} /> Большой
            </li>
            <li className={classes.name}>
              <Image src={leaf} alt="text" className={classes.leaf} /> Малый
            </li>
          </ul>
          <div className={classes.slides}>
            {slidesData.map((slide) => {
              return (
                <div className={classes.slidesBlock}>
                  <Image
                    src={slide.img}
                    alt="Turin"
                    className={classes.image}
                  ></Image>
                  <div className={classes.textBlock}>
                    <h3 className={classes.header}>{slide.header}</h3>
                    <p className={classes.text}>{slide.text}</p>
                    <div className={classes.labels}>
                      {slide.labels.map((label) => {
                        return <div className={classes.label}>{label}</div>;
                      })}
                    </div>
                    <ul className={classes.plusses}>
                      {slide.plusses.map((plus) => {
                        return (
                          <li className={classes.plus}>
                            <Image
                              src={listItem}
                              className={classes.list}
                              alt="list element"
                            ></Image>
                            {plus}
                          </li>
                        );
                      })}
                    </ul>
                    <p className={classes.price}>{slide.price}</p>
                    <p className={classes.description}>{slide.description}</p>
                    <button className={classes.button}>Подробнее</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.bottomDescriptionVIP}>
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
