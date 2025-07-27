import Image from 'next/image';
import style from './Otzuvu.module.css';
import { useRef } from 'react';

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
import Link from 'next/link';

const data = [
  {
    photo: EvgeniiS,
    name: 'Евгений С.',
    date: '21 декабря 2024',
    rating: '5.0',
    text: 'Само парение отличное! В 20:45 «Чёрная полынь», специальный сорт — интересно, насыщенно! Пар мягкий и отличная работа банщика. В 21:30 пар на пиве, звучало эффектно. Все сеансы небольшие, минут 5-7, но яркие и классные, с мягким паром и необычным ароматом. Без всякой музыки, прошу обратить внимание! (+ в традиции). Такой динамики не было нигде, при этом нет ощущения, что не хватило. Добавлю, в мифологии и традиции я несколько раз натыкался на инфу, что первый чесночный пар в общественных банях в Москве стали делать именно здесь, в 00-е годы, увидев сегодня эксперименты с парами — охотно в это верю. Почти те самые аутентичные общественные бани)',
    tags: ['Парения', 'Ароматный пар', 'Традиции'],
    showMoreButton: true
  },
  {
    photo: SnegS,
    name: 'Sneg S.',
    date: '20 декабря 2024',
    rating: '5.0',
    text: 'Праздновали с подругами мой день рождения и это был лучший выбор места. До этого мы были в разных банях, но только тут такая домашняя и комфортная обстановка. Народу не много, пар мягкий, банщик Андрей прекрасен. Очень рекомендую попробовать у него паренье со льдом. Это лучшее из всех, что я пробовала. Да и очень вкусно кормят. В общем — рекомендую. Единственно, имейте в виду, что женские дни — это только понедельник и вторник. Но администрация обещала добавить как минимум еще один день ☺️',
    tags: ['Атмосфера', 'Парения', 'Кухня'],
    showMoreButton: true
  },
  {
    photo: EvgeniiB,
    name: 'Евгений Б.',
    date: '13 октября 2024',
    rating: '5.0',
    text: 'Место для ценителей бани. Здесь есть свои ритуалы и традиции. Тут не только попаришься, а еще и душой отдохнешь. За несколько часов всю хандру выпаришь, ну и купель с холодной водой в чувства приводит. А еще есть массаж и пилинг. Есть у меня экспертность в строительстве и эксплуатации бань, саун и бассейнов. У каждого такого объекта есть свой шарм. Вот здесь именно такое место — с историей и традициями. Сюда хочется возвращаться!',
    tags: ['Атмосфера', 'Услуги', 'Традиции'],
    showMoreButton: true
  },
  {
    photo: AndreiK,
    name: 'Андрей К.',
    date: '1 марта 2025',
    rating: '5.0',
    text: 'Прекрасное место! Отличная парная, комфортная помывочная. Есть массаж, хамам. Удобные шкафчики, столы на 6 человек и VIP-комнаты во всех разрядах. Отзывчивый и приветливый персонал! Рекомендую!)',
    tags: ['Парная', 'Хамам', 'VIP-кабинеты'],
    showMoreButton: false
  },
  {
    photo: MikhailR,
    name: 'Михаил Р.',
    date: '8 февраля 2025',
    rating: '5.0',
    text: 'Хорошие бани для отдыха, свежий пар каждые 20-30 минут! Есть турецкая сауна, можно покушать и выпить пиво если есть желание, а после бани можно посидеть в небольшом кафе так же расположенном внутри)',
    tags: ['Парная', 'Ароматный пар', 'Кухня и бар'],
    showMoreButton: false
  },
  {
    photo: GeorgiiB,
    name: 'Георгий Б.',
    date: '31 октября 2024',
    rating: '5.0',
    text: 'Я пенсионер, хожу в эту баню лет десять в льготные дни. Бани здесь просто великолепные — очень чистые, уютные и ухоженные. Сервис на высоте, персонал очень внимателен и заботлив. Парные комнаты оборудованы всем необходимымдля комфортного отдыха. Есть купель, цены приемлемые. После посещения Калитниковских бань я чувствую себя как перерожденный! Это идеальное место для того, чтобы побаловать себя и отдохнуть душой и телом. Настоятельно рекомендую всем, кто ищет настоящее расслабление и уход за собой!',
    tags: ['Атмосфера', 'Парня', 'Персонал'],
    showMoreButton: true
  },
  {
    photo: MaksimL,
    name: 'Максим Л.',
    date: '6 января 2025',
    rating: '5.0',
    text: 'Были 4 января 2025 года в высшем мужском разряде. Первое, что хочу отметить — наличие паковки. Это потрясающе удобно, не надо думатьгде оставить автомобиль и переживать за него. В стоимость посещения входит простыняи полотенце, что приятно удивило. Но самое главное, зачем ходят в баню — это парная, тут она великолепная, не очень большая, но все посетители размещаются с комфортом. Пар делают каждый час, мы попали на пиво, полынь и лаванду. Между заходами поужинали, отведали солянку, блинов с красной рыбой и травяного чая с медом! Баня очень понравилась, рекомендую!',
    tags: ['Парковка', 'Ароматный пар', 'Кухня'],
    showMoreButton: true
  },
  {
    photo: EgorK,
    name: 'Егор К.',
    date: '3 апреля 2025',
    rating: '5.0',
    text: 'Для меня это лучшие бани Москвы по соотношению цена качество. Свежий пар каждые 40 минут. Где вы еще такое найдете? Был, пожалуй, во всех банях Москвы и остановил свой выбор именно на этом невероятном месте!',
    tags: ['Атмосфера', 'Свежий пар', 'Цены'],
    showMoreButton: false
  },
  {
    photo: BorisSH,
    name: 'Борис Ш.',
    date: '22 февраля 2025',
    rating: '5.0',
    text: 'Хорошее место, отличный пар! Ребята мощно заморачиваются над качеством пара. Удобные столы и бар, локеры, купель и помывочная зона. Спасибо за классный день!',
    tags: ['Парная', 'Качество отдыха', 'Зона отдыха'],
    showMoreButton: false
  },
  {
    photo: SergeiK,
    name: 'Сергей К.',
    date: '14 декабря 2024',
    rating: '5.0',
    text: 'Баня на 5 из 5 бесспорно!!! Чисто, уютно, сервис на высоте. Пар каждые 40 минут. Услуги парильщиков. Разнообразное меню, всё вкусно и по достойным ценам 🙂',
    tags: ['Атмосфера', 'Ароматный пар', 'Кухня'],
    showMoreButton: false
  },
  {
    photo: AntonR,
    name: 'Антон Р.',
    date: '9 июля 2024',
    rating: '5.0',
    text: 'Очень уютное место для отдыха. Особенно, если приходить пораньше, тогда вообще тихо и спокойно. Банные традиции, прекрасные ароматы, легкий пар!',
    tags: ['Атмосфера', 'Легкий пар', 'Традиции'],
    showMoreButton: false
  },
  {
    photo: Irina,
    name: 'Ирина',
    date: '17 января 2025',
    rating: '5.0',
    text: 'Для меня на сегодняшний день лучшая баня!Тихо спокойно, сервис на высоте. Пар отличный, падают каждые 30-40 минут. Кухня вкусная и разнообразная)',
    tags: ['Атмосфера', 'Свежий пар', 'Кухня'],
    showMoreButton: false
  },
  {
    photo: AlekseiSH,
    name: 'Алексей Щ.',
    date: '3 сентября 2024',
    rating: '5.0',
    text: 'Место супер! Пар то что надо. Вкусный пар великолепный и делают часто. Персонал отзывчивый. Реально отдыхаю душой и телом)',
    tags: ['Атмосфера', 'Вкусный пар', 'Персонал'],
    showMoreButton: false
  },
  {
    photo: AntonE,
    name: 'Антон И.',
    date: '7 апреля 2025',
    rating: '5.0',
    text: 'Хорошие бани 👍 Вкусный пар, в конце дают подышать хреном ) Очень вкусно ) Чисто, есть бесплатная парковка 🅿️ своя кухня!',
    tags: ['Парковка', 'Ароматный пар', 'Кухня'],
    showMoreButton: false
  }
];

export const Otzuvu = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  function openComment(event: React.MouseEvent<HTMLImageElement>) {
    const button = event.currentTarget as HTMLDivElement;
    const card = button.closest('.otzuv') as HTMLDivElement;
    const textBlock = card?.querySelector('.otzuv-text') as HTMLDivElement;
    if (textBlock && card) {
      const fullHeight = textBlock.scrollHeight;
      const isExpanded = button.dataset.expanded === 'true';

      if (isExpanded) {
        button.innerText = 'Читать весь отзыв';
        button.dataset.expanded = 'false';
        textBlock.style.maxHeight = `170px`;
        card.style.maxHeight = `400px`;
      } else {
        button.innerText = 'Свернуть отзыв';
        button.dataset.expanded = 'true';
        textBlock.style.maxHeight = `${fullHeight}px`;
        textBlock.style.transition = 'max-height 0.4s ease';
        card.style.maxHeight = `800px`;
        card.style.height = `fit-content`;
        card.style.transition = 'max-height 0.4s ease';
      }
    }
  }

  function handleScroll(event: React.MouseEvent<HTMLImageElement>) {
    if (containerRef.current && itemRef.current) {
      const target = event.target as HTMLElement;
      const scrollAmount = itemRef.current.offsetWidth + 15 || 463;
      const side = target.className === 'toLeft' ? -scrollAmount : scrollAmount;
      containerRef.current.scrollBy({
        left: side,
        behavior: 'smooth'
      });
    }
  }

  return (
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
              <Image
                src={chevron}
                alt="chevron"
                className={'toLeft'}
                onClick={handleScroll}
              ></Image>
            </div>
            <div className={'right-button'}>
              <Image
                src={chevron}
                alt="chevron"
                className={'toRight'}
                onClick={handleScroll}
              />
            </div>
          </div>
          <div className={'otzuvu-blocks'} ref={containerRef}>
            {data.map((el, index) => {
              return (
                <div className={'otzuv'} key={el.name} ref={itemRef}>
                  <div>
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
                        <div
                          className={classNames('otzuv-zvezdu', 'rightSide')}
                        >
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
                    {el.showMoreButton && (
                      <div className={'otzuv-button'} onClick={openComment}>
                        Читать весь отзыв
                      </div>
                    )}
                  </div>
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
                <p>2559 отзывов</p>
              </div>
              <div>
                <Link
                  className="link"
                  href="https://yandex.ru/profile/1125145003?lang=ru"
                  target="_blank"
                >
                  На Яндекс картах
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
