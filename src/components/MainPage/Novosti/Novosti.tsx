import Image from 'next/image';
import classNames from 'classnames';
import styles from './Novosti.module.css';

import novostiImg1 from '/public/img/mainPage/novosti/img1.jpeg';
import novostiImg2 from '/public/img/mainPage/novosti/img2.jpeg';
import listItem from '/public/img/mainPage/vip/Bullet.svg';

export const Novosti = () => {
  return (
    <section className={'classicBlock  novosti i akcii'}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Новости и акции</h2>
          <h3 className={'headerH3'}>
            Будьте в курсе
            <br />
            событий и акций
          </h3>
        </div>
        <div className={'threeColumns reverse'}>
          <div className={'column'}>
            <Image
              src={novostiImg2}
              alt="novostiImg2"
              className={'uslugiImg novostiImgFix'}
            ></Image>
          </div>
          <div className={'column'}>
            <Image
              src={novostiImg1}
              alt="novostiImg1"
              className={'uslugiImg '}
            ></Image>
          </div>
          <div className={'column'}>
            <div className={classNames(styles.textBlock, 'littleTextBlock')}>
              <h3 className={styles.header}>Новости и акции</h3>
              <p className={'text'}>
                Мы регулярно радуем гостей специальными предложениями. Вы
                получите билет и шанс выиграть приятный подарок
              </p>

              <ul className={styles.plusses}>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  50% скидка в будни до 15:00
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  20% скидка и подарки на день рождения
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Сбитень на травах новому гостю
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Детям до 7 лет бесплатно
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Всегда сезонное меню
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Мы дарим подарки
                </li>
              </ul>
              <button className={'button'}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
