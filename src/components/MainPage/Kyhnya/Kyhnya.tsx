import Image from 'next/image';

import uslugiImg1 from '/public/img/mainPage/uslugi/descktopImg0.jpg';
import uslugiImg2 from '/public/img/mainPage/uslugi/descktopImg1.jpg';
import listItem from '/public/img/mainPage/vip/Bullet.svg';

export const Kyhnya = () => {
  return (
    <section className={'classicBlock  kyhnya - Posle aromatnoi parilki'}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Кухня</h2>
          <h3 className={'headerH3'}>
            После <br />
            ароматной парилки
          </h3>
        </div>
        <div className={'threeColumns'}>
          <div className={'column'}>
            <Image
              src={uslugiImg1}
              alt="Uslugi1"
              className={'uslugiImg'}
            ></Image>
          </div>
          <div className={'column'}>
            <Image
              src={uslugiImg2}
              alt="Uslugi2"
              className={'uslugiImg'}
            ></Image>
          </div>
          <div className={'column'}>
            <div className={'textBlock littleTextBlock'}>
              <h3 className={'header'}>Кухня и бар </h3>
              <p className={'text'}>
                Большой выбор холодных закусок, напитков, мясных и рыбных блюд,
                домашних настоек
              </p>

              <ul className={'plusses'}>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Блюда на мангале
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Домашние настойки
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Лепим сами
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Свежее разливное пиво
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Сезонное меню
                </li>
              </ul>
              <button className={'button'}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
      <div className={'bottomDescription'}>
        <p>
          Кафе находится в лобби на первом этаже. Здесь можно подождать компанию
          перед отдыхом в бане, расслабиться и подкрепиться после процедур,
          посмотреть спортивные матчи
        </p>
      </div>
    </section>
  );
};
