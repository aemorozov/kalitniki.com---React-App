import Image from 'next/image';

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
            <div className={'textBlock littleTextBlock'}>
              <h3 className={'header'}>Новости и акции</h3>
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
                  Скидка именинникам
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Подарочные сертификаты
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  Сбитень на травах новому каждому
                </li>
                <li className={'plus'}>
                  <Image
                    src={listItem}
                    className={'list'}
                    alt="list element"
                  ></Image>
                  50 % в будни до 14:00
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
