import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './VIPMobile.module.css';

import turin from '/public/img/mainPage/vip/mobileMenu/tyrin.jpg';
import comfort from '/public/img/mainPage/vip/mobileMenu/comfort.jpg';
import rimskii from '/public/img/mainPage/vip/mobileMenu/rimskii.jpg';
import malii from '/public/img/mainPage/vip/mobileMenu/malii.jpg';
import bolshoi from '/public/img/mainPage/vip/mobileMenu/bolshoi.jpg';
import classNames from 'classnames';

const elementData = [
  {
    img: turin,
    header: 'Турин',
    tags: ['Для встреч с друзьями', 'Для релакса', 'Уютно', 'Спутниковое TV'],
    plusses: [
      'Вместимость до 6 гостей',
      'Общая площадь 12 м2',
      'Минимальная аренда - 2 часа'
    ],
    price: '2500Р/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. После 2 часов действует поминутная тарификация',
    moreButton: ''
  },
  {
    img: comfort,
    header: 'Комфорт',
    tags: ['Для большой компании', 'Зона отдыха', 'Душевая', 'TV'],
    plusses: [
      'Вместимость до 15 гостей',
      'Общая площадь 19 м2',
      'Минимальная аренда - 2 часа'
    ],
    price: '4000Р/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. После 2 часов действует поминутная тарификация',
    moreButton: ''
  },
  {
    img: rimskii,
    header: 'Римский',
    tags: ['Для уединения и релакса', 'Персональные шкафчики', 'TV'],
    plusses: [
      'Вместимость до 8 гостей',
      'Общая площадь 15 м2',
      'Минимальная аренда - 2 часа'
    ],
    price: '3000Р/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. После 2 часов действует поминутная тарификация',
    moreButton: ''
  },
  {
    img: malii,
    header: 'Малый',
    tags: ['Для маленькой компании', 'Выход в парную', 'TV'],
    plusses: [
      'Вместимость до 6 гостей',
      'Общая площадь 12 м2',
      'Минимальная аренда - 2 часа'
    ],
    price: '2200Р/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. После 2 часов действует поминутная тарификация',
    moreButton: ''
  },
  {
    img: bolshoi,
    header: 'Большой',
    tags: ['Для праздников', 'Большое пространство', 'TV'],
    plusses: [
      'Вместимость до 8 гостей',
      'Общая площадь 15 м2',
      'Минимальная аренда - 2 часа'
    ],
    price: '2750Р/2 часа',
    description:
      'Оплачивается дополнительно к входному билету. После 2 часов действует поминутная тарификация',
    moreButton: ''
  }
];

export const VIPmobile = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Проверяем, что код выполняется на клиенте
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <div className={classNames('classicBlock', styles.classicBlock)}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>5 VIP-кабинетов</h2>
          <h3 className={'headerH3'}>
            Для отдыха <br />в компании близких
          </h3>
        </div>
        <div className={styles.forMobileScroll}>
          <div className={styles.mainBlock}>
            {elementData.map((element) => {
              return (
                <div className={styles.block} key={element.header}>
                  <div className={styles.divForImg}>
                    <Image
                      src={element.img}
                      className={styles.img}
                      alt={element.header}
                      title={element.header}
                      fill
                    />
                  </div>
                  <div className={styles.descriptionBlock}>
                    <div>
                      <h2 className={styles.header}>{element.header}</h2>
                      <div className={'tags'}>
                        {element.tags.map((tag) => {
                          return (
                            <div className={'tag'} key={tag}>
                              <p className={'tagP'}>{tag}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className={styles.plusses}>
                      {element.plusses?.map((plus) => {
                        return (
                          <div className={styles.plus} key={plus}>
                            {plus}
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <div className={styles.priceBlock}>
                        <p className={styles.price}>{element.price}</p>
                      </div>
                      <div className={styles.description}>
                        {element.description}
                      </div>
                      <div className={styles.moreButtonBlock}>
                        <button className={'moreButton'}>Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.bottomDescription}>
          <p>
            VIP-кабинеты находятся в мужском и высшем мужском разрядах. Каждый
            кабинет готовится специально к вашему визиту с заботой{' '}
            {windowWidth < 767 ? <br /> : ''}и вниманием к деталям
          </p>
        </div>
      </div>
    </div>
  );
};
