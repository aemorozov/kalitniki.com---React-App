import Image from 'next/image';
import style from './Otzuvu.module.css';

import EvgeniiS from '/public/img/mainPage/otzuvu/EvgeniiS.jpg';
import SnegS from '/public/img/mainPage/otzuvu/SnegS.jpg';
import EvgeniiB from '/public/img/mainPage/otzuvu/EvgeniiB.jpg';
import AndreiK from '/public/img/mainPage/otzuvu/AndreiK.jpg';
import MikhailR from '/public/img/mainPage/otzuvu/MikhailR.jpg';
import GeorgiiB from '/public/img/mainPage/otzuvu/GeorgiiB.jpg';
import MaksimL from '/public/img/mainPage/otzuvu/MaksimL.jpg';
import EgorK from '/public/img/mainPage/otzuvu/EgorK.jpg';
import BorisSH from '/public/img/mainPage/otzuvu/BorisSH.jpg';
import SergeiK from '/public/img/mainPage/otzuvu/SergeiK.jpg';
import AntonR from '/public/img/mainPage/otzuvu/AntonR.jpg';
import Irina from '/public/img/mainPage/otzuvu/Irina.jpg';
import AlekseiSH from '/public/img/mainPage/otzuvu/AlekseiSH.jpg';
import AntonE from '/public/img/mainPage/otzuvu/AntonE.jpg';
import chevron from '/public/img/mainPage/otzuvu/chevron.svg';
import ya from '/public/img/mainPage/otzuvu/ya.svg';
import star from '/public/img/mainPage/otzuvu/star.svg';
import classNames from 'classnames';

const data = [
  {
    photo: EvgeniiS,
    name: 'Евгений С.',
    date: '21 декабря 2024',
    rating: '5.0',
    text: 'Само парение отличное! В 20:45 «Чёрная полынь», специальный сорт — интересно, насыщенно! Пар мягкий и отличная работа банщика. В 21:30 пар на пиве, звучало эффектно. Все сеансы небольшие, минут 5-7, но яркие и классные, с мягким паром и необычным ароматом. Без всякой музыки, прошу обратить внимание! (+ в традиции). Такой динамики не было нигде, при этом нет ощущения, что не хватило. Добавлю, в мифологии и традиции я несколько раз натыкался на инфу, что первый чесночный пар в общественных банях в Москве стали делать именно здесь, в 00-е годы, увидев сегодня эксперименты с парами — охотно в это верю. Почти те самые аутентичные общественные бани)',
    tags: ['Парения', 'Ароматный пар', 'Традиции']
  },
  {
    photo: SnegS,
    name: 'Sneg S.',
    date: '20 декабря 2024',
    rating: '5.0',
    text: 'Праздновали с подругами мой день рождения и это был лучший выбор места. До этого мы были в разных банях, но только тут такая домашняя и комфортная обстановка. Народу не много, пар мягкий, банщик Андрей прекрасен. Очень рекомендую попробовать у него паренье со льдом. Это лучшее из всех, что я пробовала. Да и очень вкусно кормят. В общем — рекомендую. Единственно, имейте в виду, что женские дни — это только понедельник и вторник. Но администрация обещала добавить как минимум еще один день ☺️',
    tags: ['Атмосфера', 'Парения', 'Кухня']
  },
  {
    photo: EvgeniiB,
    name: 'Евгений Б.',
    date: '13 октября 2024',
    rating: '5.0',
    text: 'Место для ценителей бани. Здесь есть свои ритуалы и традиции. Тут не только попаришься, а еще и душой отдохнешь. За несколько часов всю хандру выпаришь, ну и купель с холодной водой в чувства приводит. А еще есть массаж и пилинг. Есть у меня экспертность в строительстве и эксплуатации бань, саун и бассейнов. У каждого такого объекта есть свой шарм. Вот здесь именно такое место — с историей и традициями. Сюда хочется возвращаться!',
    tags: ['Атмосфера', 'Услуги', 'Традиции']
  },
  {
    photo: AndreiK,
    name: 'Андрей К.',
    date: '1 марта 2025',
    rating: '5.0',
    text: 'Прекрасное место! Отличная парная, комфортная помывочная. Есть массаж, хамам. Удобные шкафчики, столы на 6 человек и VIP-комнаты во всех разрядах. Отзывчивый и приветливый персонал! Рекомендую!)',
    tags: ['Парная', 'Хамам', 'VIP-кабинеты']
  },
  {
    photo: MikhailR,
    name: 'Михаил Р.',
    date: '8 февраля 2025',
    rating: '5.0',
    text: 'Хорошие бани для отдыха, свежий пар каждые 20-30 минут! Есть турецкая сауна, можно покушать и выпить пиво если есть желание, а после бани можно посидеть в небольшом кафе так же расположенном внутри)',
    tags: ['Парная', 'Ароматный пар', 'Кухня и бар']
  },
  {
    photo: GeorgiiB,
    name: 'Георгий Б.',
    date: '31 октября 2024',
    rating: '5.0',
    text: 'Я пенсионер, хожу в эту баню лет десять в льготные дни. Бани здесь просто великолепные — очень чистые, уютные и ухоженные. Сервис на высоте, персонал очень внимателен и заботлив. Парные комнаты оборудованы всем необходимымдля комфортного отдыха. Есть купель, цены приемлемые. После посещения Калитниковских бань я чувствую себя как перерожденный! Это идеальное место для того, чтобы побаловать себя и отдохнуть душой и телом. Настоятельно рекомендую всем, кто ищет настоящее расслабление и уход за собой!',
    tags: ['Атмосфера', 'Парня', 'Персонал']
  },
  {
    photo: MaksimL,
    name: 'Максим Л.',
    date: '6 января 2025',
    rating: '5.0',
    text: 'Были 4 января 2025 года в высшем мужском разряде. Первое, что хочу отметить — наличие паковки. Это потрясающе удобно, не надо думатьгде оставить автомобиль и переживать за него. В стоимость посещения входит простыняи полотенце, что приятно удивило. Но самое главное, зачем ходят в баню — это парная, тут она великолепная, не очень большая, но все посетители размещаются с комфортом. Пар делают каждый час, мы попали на пиво, полынь и лаванду. Между заходами поужинали, отведали солянку, блинов с красной рыбой и травяного чая с медом! Баня очень понравилась, рекомендую!',
    tags: ['Парковка', 'Ароматный пар', 'Кухня']
  },
  {
    photo: EgorK,
    name: 'Егор К.',
    date: '3 апреля 2025',
    rating: '5.0',
    text: 'Для меня это лучшие бани Москвы по соотношению цена качество. Свежий пар каждые 40 минут. Где вы еще такое найдете? Был, пожалуй, во всех банях Москвы и остановил свой выбор именно на этом невероятном месте!',
    tags: ['Атмосфера', 'Свежий пар', 'Цены']
  },
  {
    photo: BorisSH,
    name: 'Борис Ш.',
    date: '22 февраля 2025',
    rating: '5.0',
    text: 'Хорошее место, отличный пар! Ребята мощно заморачиваются над качеством пара. Удобные столы и бар, локеры, купель и помывочная зона. Спасибо за классный день!',
    tags: ['Парная', 'Качество отдыха', 'Зона отдыха']
  },
  {
    photo: SergeiK,
    name: 'Сергей К.',
    date: '14 декабря 2024',
    rating: '5.0',
    text: 'Баня на 5 из 5 бесспорно!!! Чисто, уютно, сервис на высоте. Пар каждые 40 минут. Услуги парильщиков. Разнообразное меню, всё вкусно и по достойным ценам 🙂',
    tags: ['Атмосфера', 'Ароматный пар', 'Кухня']
  },
  {
    photo: AntonR,
    name: 'Антон Р.',
    date: '9 июля 2024',
    rating: '5.0',
    text: 'Очень уютное место для отдыха. Особенно, если приходить пораньше, тогда вообще тихо и спокойно. Банные традиции, прекрасные ароматы, легкий пар!',
    tags: ['Атмосфера', 'Легкий пар', 'Традиции']
  },
  {
    photo: Irina,
    name: 'Ирина',
    date: '17 января 2025',
    rating: '5.0',
    text: 'Для меня на сегодняшний день лучшая баня!Тихо спокойно, сервис на высоте. Пар отличный, падают каждые 30-40 минут. Кухня вкусная и разнообразная)',
    tags: ['Атмосфера', 'Свежий пар', 'Кухня']
  },
  {
    photo: AlekseiSH,
    name: 'Алексей Щ.',
    date: '3 сентября 2024',
    rating: '5.0',
    text: 'Место супер! Пар то что надо. Вкусный пар великолепный и делают часто. Персонал отзывчивый. Реально отдыхаю душой и телом)',
    tags: ['Атмосфера', 'Вкусный пар', 'Персонал']
  },
  {
    photo: AntonE,
    name: 'Антон И.',
    date: '7 апреля 2025',
    rating: '5.0',
    text: 'Хорошие бани 👍 Вкусный пар, в конце дают подышать хреном ) Очень вкусно ) Чисто, есть бесплатная парковка 🅿️ своя кухня!',
    tags: ['Парковка', 'Ароматный пар', 'Кухня']
  }
];

export const Otzuvu = () => {
  return (
    // <section className={'background-otzuvu'}>
    <div className={'classicBlock  otzuvu'}>
      <div className={'contentBlock'}>
        <div className={'headers'}>
          <h2 className={'headerH2'}>Отзывы гостей</h2>
          <h3 className={'headerH3'}>
            Атмосфера,
            <br />
            ароматный пар, кухня
          </h3>
        </div>
        <div className={'otzuvu-slider'}>
          <div className={'buttons'}>
            <div className={'left-button'}>
              <Image src={chevron} alt="chevron" className={'toLeft'}></Image>
            </div>
            <div className={'right-button'}>
              {' '}
              <Image src={chevron} alt="chevron" className={'toRight'}></Image>
            </div>
          </div>
          <div className={'otzuvu-blocks'}>
            {data.map((el) => {
              return (
                <div className={'otzuv'} key={el.name}>
                  <div className={'rightAndLeftSides'}>
                    <div className={classNames('otzuv-title', 'leftSide')}>
                      <div className={'otzuv-photoNameAndDate'}>
                        <Image
                          src={el.photo}
                          alt="otzuv001"
                          className={'otzuv-photo not-border'}
                        ></Image>
                        <Image
                          src={ya}
                          alt={'ya'}
                          className={'otzuv-logo'}
                        ></Image>
                        <div className={'otzuv-nameAndDate'}>
                          <div className={'otzuv-name'}>{el.name}</div>
                          <div className={'otzuv-date'}>{el.date}</div>
                        </div>
                      </div>
                      <div className={classNames('otzuv-zvezdu', 'rightSide')}>
                        <p>
                          <Image src={star} alt="star"></Image>
                          <span className={'marginFix'}>5,0</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={'otzuv-text'}>
                    <p>{el.text}</p>
                  </div>
                  <div className={'otzuv-button'}>Читать весь отзыв</div>
                  <div className={style.tagsBlock}>
                    <p className={style.textP}>Понравилось:</p>
                    <div className={style.tags}>
                      {el.tags.map((tag) => {
                        return (
                          <div className={style.tag} key={tag}>
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={'after-slider'}>
            <div className={'textLeft'}>
              <p>
                «А вот приятно удивил{' '}
                <span className={'textLeftSpan'}>лед с лапником</span> и купель
                с <span className={'textLeftSpan'}>ледяной</span> водой верх
                восторга! Главное ведь{' '}
                <span className={'textLeftSpan'}>чистота тела</span>»
              </p>
            </div>
            <div className={'rightSide'}>
              <div className={'photos'}>
                {data.map((el, index) => {
                  if (index < 5) {
                    return (
                      <div className={'otzuv-photo-el'} key={el.name}>
                        <Image
                          src={el.photo}
                          alt={el.name}
                          className={'otzuv-photo'}
                        ></Image>
                      </div>
                    );
                  }
                })}
              </div>
              <div className={'count'}>
                <p>2276 отзывов</p>
              </div>
              <div className={'link'}>
                <p>На Яндекс картах</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
};
