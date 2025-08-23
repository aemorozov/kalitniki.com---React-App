import classNames from 'classnames';
import Image from 'next/image';
import styles from './Novosti.module.css';

import novostiImg1 from '/public/img/mainPage/novosti/img1.jpeg';
import novostiImg2 from '/public/img/mainPage/novosti/img2.jpeg';

const novostiData = [
  {
    header: 'Новости и акции',
    text: 'Мы регулярно радуем гостей специальными предложениями. Вы получите билет и шанс выиграть приятный подарок',
    plusses: [
      '50% скидка в будни до 15:00',
      '20% скидка и подарки на день рождения',
      'Сбитень на травах новому гостю',
      'Детям до 7 лет бесплатно',
      'Всегда сезонное меню',
      'Мы дарим подарки'
    ],
    button: '##'
  },
  { img: novostiImg1 },
  { img: novostiImg2 }
];

export const Novosti = () => {
  return (
    <section className={'classicBlock novosti'}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Новости и акции</h2>
          <h3 className={'headerH3'}>
            Будьте в курсе
            <br />
            событий и акций
          </h3>
        </div>
        <div className={'threeColumns'}>
          {novostiData.map((element, index) => {
            if (element.img) {
              return (
                <div className={'column'} key={index}>
                  <Image
                    src={element.img}
                    alt={index.toString()}
                    className={'uslugiImg novostiImgFix'}
                  ></Image>
                </div>
              );
            } else {
              return (
                <div className={'column'} key={element.header}>
                  <div
                    className={classNames(styles.textBlock, 'littleTextBlock')}
                  >
                    <h3 className={styles.header}>{element.header}</h3>
                    <p className={'text'}>{element.text}</p>
                    <ul className={styles.plusses}>
                      {element.plusses.map((plus, index) => {
                        return (
                          <li className={'plus'} key={index}>
                            <img
                              src="/img/mainPage/vip/Bullet.svg"
                              className={'list'}
                              alt="list element"
                            />
                            {plus}
                          </li>
                        );
                      })}
                    </ul>
                    <button className={'button'}>Подробнее</button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
