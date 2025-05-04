import Image from 'next/image';

import uslugiImg3 from '/public/img/mainPage/uslugi/img3.jpeg';
import listItem from '/public/img/mainPage/vip/Bullet.svg';

export const Uslugi = () => {
  return (
    <section
      className={'classicBlock  Uslugi - Dlya zdorovya i vosstanovleniya'}
    >
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
    </section>
  );
};
