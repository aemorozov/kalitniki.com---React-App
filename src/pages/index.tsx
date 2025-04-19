import { Slider } from '../components/MainPage/Slider/Slider';
import { ClassicBlock } from './../components/ClassicBlock/ClassicBlock';
import Image from 'next/image';
import turinImg from '../img/mainPage/vip/543150a55361764f23d8a1494d0cb30e.jpeg';
import listItem from '../img/mainPage/vip/Bullet.svg';

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
              <Image src={turinImg} alt="Turin" className={'image'}></Image>
              <div className={'textBlock'}>
                <h3 className={'header'}>Турин</h3>
                <p className={'text'}>
                  Находится в высшем мужском разряде. Лучшее место для встречи c
                  друзьями и близкими между парениями. Небольшой и уютный уголок
                  для отдыха и релакса...
                </p>
                <div className={'labels'}>
                  <div className={'label'}>Для встреч c друзьями</div>
                  <div className={'label'}>Обслуживание по меню</div>
                  <div className={'label'}>Спутниковое TV</div>
                  <div className={'label'}>Label</div>
                  <div className={'label'}>Label</div>
                </div>
                <ul className={'plusses'}>
                  <li className={'plus'}>
                    <Image
                      src={listItem}
                      className={'list'}
                      alt="list element"
                    ></Image>
                    Вместимость до 6 гостей
                  </li>
                  <li className={'plus'}>
                    <Image
                      src={listItem}
                      className={'list'}
                      alt="list element"
                    ></Image>
                    Общая площадь 12 м2
                  </li>
                  <li className={'plus'}>
                    <Image
                      src={listItem}
                      className={'list'}
                      alt="list element"
                    ></Image>
                    Минимальная аренда — 2 часа
                  </li>
                </ul>
                <p className={'price'}>2500 P/2 часа</p>
                <p className={'description'}>
                  Оплачивается дополнительно к входному билету
                  <br />
                  После 2 часов действует поминутная тарификация
                </p>
                <button className={'button'}>Подробнее</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
