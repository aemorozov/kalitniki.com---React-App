import Image from 'next/image';
import classes from './VIP.module.css';

import vipBackImg from '/public/img/mainPage/vip/d4d5a7239e7aac5883c5d8bea7488137.png';
import leaf from '/public/img/header/Icon_container.svg';
import turinImg from '/public/img/mainPage/vip/543150a55361764f23d8a1494d0cb30e.jpeg';
import listItem from '/public/img/mainPage/vip/Bullet.svg';

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
            <div className={classes.slidesBlock}>
              <Image
                src={turinImg}
                alt="Turin"
                className={classes.image}
              ></Image>
              <div className={classes.textBlock}>
                <h3 className={classes.header}>Турин</h3>
                <p className={classes.text}>
                  Находится в высшем мужском разряде. Лучшее место для встречи c
                  друзьями и близкими между парениями. Небольшой и уютный уголок
                  для отдыха и релакса...
                </p>
                <div className={classes.labels}>
                  <div className={classes.label}>Для встреч c друзьями</div>
                  <div className={classes.label}>Обслуживание по меню</div>
                  <div className={classes.label}>Спутниковое TV</div>
                  <div className={classes.label}>Label</div>
                  <div className={classes.label}>Label</div>
                </div>
                <ul className={classes.plusses}>
                  <li className={classes.plus}>
                    <Image
                      src={listItem}
                      className={classes.list}
                      alt="list element"
                    ></Image>
                    Вместимость до 6 гостей
                  </li>
                  <li className={classes.plus}>
                    <Image
                      src={listItem}
                      className={classes.list}
                      alt="list element"
                    ></Image>
                    Общая площадь 12 м2
                  </li>
                  <li className={classes.plus}>
                    <Image
                      src={listItem}
                      className={classes.list}
                      alt="list element"
                    ></Image>
                    Минимальная аренда — 2 часа
                  </li>
                </ul>
                <p className={classes.price}>2500 P/2 часа</p>
                <p className={classes.description}>
                  Оплачивается дополнительно к входному билету
                  <br />
                  После 2 часов действует поминутная тарификация
                </p>
                <button className={classes.button}>Подробнее</button>
              </div>
            </div>
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
