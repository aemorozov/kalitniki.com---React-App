import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './NovostiiMobile.module.css';
import classNames from 'classnames';

import novostiImg1 from '/public/img/mainPage/novosti/img1.jpeg';
import novostiImg2 from '/public/img/mainPage/novosti/img2.jpeg';

const novostiData = [
  {
    header: 'Новости и акции',
    text: 'Мы регулярно радуем гостей предложениями. Вы получите билет и шанс выиграть приятный подарок',
    plusses: [
      'Скидки новому гостю',
      'Подарочные сертификаты',
      'Сбитень на травах',
      'Скидки в будни 50% до 15:00',
      'Подарки'
    ],
    button: '##'
  },
  { img: novostiImg1 },
  { img: novostiImg2 }
];

export const NovostiiMobile = () => {
  return (
    <div className={classNames('classicBlock', styles.classicBlock)}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Анонсы</h2>
          <h3 className={'headerH3'}>
            Будьте в курсе
            <br />
            событий и акций
          </h3>
        </div>
        <div className={styles.forMobileScroll}>
          <div className={styles.mainBlock}>
            {novostiData.map((element) => {
              if (element.img) {
                return (
                  <div className={styles.block} key={element.header}>
                    <Image src={element.img} alt="img" className={styles.img} />
                  </div>
                );
              } else {
                return (
                  <div className={styles.block} key={element.header}>
                    <div className={styles.descriptionBlock}>
                      <div>
                        <div>
                          <h2 className={styles.header}>{element.header}</h2>
                        </div>
                        <div className={styles.text}>{element.text}</div>
                        <div className={styles.plusses}>
                          {element.plusses?.map((plus) => {
                            return (
                              <div className={styles.plus} key={plus}>
                                {plus}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <div className={styles.moreButtonBlock}>
                          <button className={'moreButton'}>Подробнее</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
