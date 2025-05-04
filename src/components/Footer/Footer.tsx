import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import footerImg from '/public/img/footer/banner.jpg';
import logo from '/public/img/header/Logo.svg';
import vk from '/public/img/footer/vk.svg';
import loc from '/public/img/footer/location.svg';
import ya from '/public/img/footer/ya.svg';
import star from '/public/img/mainPage/otzuvu/star.svg';
import woman from '/public/img/footer/woman.png';

export const Footer: React.FC = () => {
  return (
    <>
      <div className={'footerBanner'}>
        <div className={styles.footerBannerBackground}>
          <Image src={footerImg} alt="footer banner" />
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.top}>
          <div className={styles.logoSection}>
            <Image src={logo} alt="Калитники" className={styles.logo} />
            <p className={styles.littleHeader}>Банный комплекс </p>
            <p className={styles.littleText}>
              Москва, Большая Калитниковская, дом 42
            </p>
            <div className={styles.icons}>
              <a href="#">
                <Image src={vk} alt="VK" width={44} height={44} />
              </a>
              <a href="#">
                <Image src={loc} alt="Map" width={44} height={44} />
              </a>
            </div>
          </div>
          <div className={styles.rows}>
            <div className={styles.row}>
              <div className={styles.box}>
                <h4 className={styles.littleHeader}>Разряды</h4>
                <ul>
                  <li>Высший мужской разряд</li>
                  <li>Мужской разряд</li>
                  <li>Женский разряд</li>
                </ul>
              </div>
              <div className={styles.box}>
                <h4 className={styles.littleHeader}>О Калитниках</h4>
                <ul>
                  <li>Новости</li>
                  <li>Акции</li>
                  <li>Сертификаты</li>
                </ul>
              </div>
              <div className={styles.box}>
                <h4 className={styles.littleHeader}>Контакты</h4>
                <ul>
                  <li>+7 (495) 678 10 01</li>
                  <li>email@kalitniki.com</li>
                </ul>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.box}>
                <h4 className={styles.littleHeader}>Кабинеты</h4>
                <ul>
                  <li>Комфорт</li>
                  <li>Римский</li>
                  <li>Турин</li>
                  <li>Большой</li>
                  <li>Малый</li>
                </ul>
              </div>

              <div className={styles.box}>
                <h4 className={styles.littleHeader}>Услуги</h4>
                <ul>
                  <li>Парения</li>
                  <li>Кухня и бар</li>
                  <li>Массажи</li>
                  <li>Вкусный пар</li>
                </ul>
              </div>
              <div className={styles.rating}>
                <h4 className={styles.littleHeader}>Хорошее место</h4>
                <p>Выбор пользователей</p>
                <div className={styles.yandex}>
                  <Image src={ya} alt="Yandex" width={24} height={24} />
                  <div className={styles.five}>5.0</div>
                  <div>
                    <div className={styles.stars}>
                      <Image
                        src={star}
                        alt="star"
                        width={16}
                        height={16}
                      ></Image>
                      <Image
                        src={star}
                        alt="star"
                        width={16}
                        height={16}
                      ></Image>
                      <Image
                        src={star}
                        alt="star"
                        width={16}
                        height={16}
                      ></Image>
                      <Image
                        src={star}
                        alt="star"
                        width={16}
                        height={16}
                      ></Image>
                      <Image
                        src={star}
                        alt="star"
                        width={16}
                        height={16}
                      ></Image>
                    </div>
                    <div className={styles.count}>2276 отзывов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.bottom}>
          <span>Все права защищены</span>
          <span>©2024 Калитниковские бани</span>
          <div className={styles.woman}>
            <Image src={woman} alt="woman" className={styles.woman} />
          </div>
        </div>
      </footer>
    </>
  );
};
