import { Slider } from '../components/MainPage/Slider/Slider';
import { ClassicBlock } from './../components/ClassicBlock/ClassicBlock';
import Image from 'next/image';
import listItem from '../img/mainPage/vip/Bullet.svg';
import uslugiImg1 from '../img/mainPage/uslugi/img1.jpeg';
import uslugiImg2 from '../img/mainPage/uslugi/img2.jpeg';
import uslugiImg3 from '../img/mainPage/uslugi/img3.jpeg';
import novostiImg1 from '../img/mainPage/novosti/img1.jpeg';
import novostiImg2 from '../img/mainPage/novosti/img2.jpeg';

export default () => {
  return (
    <>
      <Slider />
      <ClassicBlock />
      <div className={'classicBlock  Uslugi - Dlya zdorovya i vosstanovleniya'}>
        <div className={'contentBlock'}>
          <div className={'headers'}>
            <h2 className={'headerH2'}>Услуги</h2>
            <h3 className={'headerH3'}>
              Для здоровья <br />и восстановления
            </h3>
          </div>
          <div className={'slides'}>
            <div className={'slidesBlock reverse'}>
              <Image src={uslugiImg3} alt="Turin" className={'image2'}></Image>
              <div className={'textBlock'}>
                <h3 className={'header'}>Услуги для тела</h3>
                <p className={'text'}>
                  Мы разработали программы, позволяющие восстановить здоровье
                  тела, не выбиваясь из плотного графика города. У нас работают
                  профессиональные пармейстеры — банщики и мастера массажа
                </p>
                <div className={'labels'}>
                  <div className={'label'}>Индивидуально</div>
                  <div className={'label'}>Профессионально</div>
                  <div className={'label'}>С любовью</div>
                  <div className={'label'}>Мягкий пар</div>
                  <div className={'label'}>Ароматы трав</div>
                  <div className={'label'}>Забота рук</div>
                </div>
                <ul className={'plusses'}>
                  <li className={'plus'}>
                    <Image
                      src={listItem}
                      className={'list'}
                      alt="list element"
                    ></Image>
                    Фирменное контрастное парение
                  </li>
                  <li className={'plus'}>
                    <Image
                      src={listItem}
                      className={'list'}
                      alt="list element"
                    ></Image>
                    Оздоровительные процедуры
                  </li>
                  <li className={'plus'}>
                    <Image
                      src={listItem}
                      className={'list'}
                      alt="list element"
                    ></Image>
                    Уход по телу
                  </li>
                </ul>
                <p className={'price'}>От 1500 P/2 часа</p>
                <p className={'description'}>
                  Прогреваем и наполняем жизненной энергией, снимаем напряжение
                </p>
                <button className={'button'}>Все услуги</button>
              </div>
            </div>
          </div>
          <div className={'bottomDescription'}>
            <p>
              У нас работают профессиональные пармейстеры — банщики и мастера
              массажа, которые сделают отдых не только приятным, но и
              оздоравливающим!
            </p>
          </div>
        </div>
      </div>
      <div className={'classicBlock  kyhnya - Posle aromatnoi parilki'}>
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
                  Большой выбор холодных закусок, напитков, мясных и рыбных
                  блюд, домашних настоек
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
            Кафе находится в лобби на первом этаже. Здесь можно подождать
            компанию перед отдыхом в бане, расслабиться и подкрепиться после
            процедур, посмотреть спортивные матчи
          </p>
        </div>
      </div>
      <div className={'classicBlock  novosti i akcii'}>
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
                  Большой выбор холодных закусок, напитков, мясных и рыбных
                  блюд, домашних настоек
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
      </div>
    </>
  );
};
