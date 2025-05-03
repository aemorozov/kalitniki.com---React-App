import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logoSection}>
          <Image src="/logo.svg" alt="Калитники" width={100} height={30} />
          <p>
            Банный комплекс
            <br />
            Москва, Большая Калитниковская, дом 42
          </p>
          <div className={styles.icons}>
            <a href="#">
              <Image src="/vk-icon.svg" alt="VK" width={24} height={24} />
            </a>
            <a href="#">
              <Image src="/map-icon.svg" alt="Map" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className={styles.columns}>
          <div>
            <h4>Разряды</h4>
            <ul>
              <li>Высший мужской разряд</li>
              <li>Мужской разряд</li>
              <li>Женский разряд</li>
            </ul>
          </div>
          <div>
            <h4>Кабинеты</h4>
            <ul>
              <li>Комфорт</li>
              <li>Римский</li>
              <li>Турин</li>
              <li>Большой</li>
              <li>Малый</li>
            </ul>
          </div>
          <div>
            <h4>Услуги</h4>
            <ul>
              <li>Парения</li>
              <li>Кухня и бар</li>
              <li>Массажи</li>
              <li>Вкусный пар</li>
            </ul>
          </div>
          <div>
            <h4>О Калитниках</h4>
            <ul>
              <li>Новости</li>
              <li>Акции</li>
              <li>Сертификаты</li>
            </ul>
          </div>
          <div>
            <h4>Контакты</h4>
            <ul>
              <li>+7 (495) 678 10 01</li>
              <li>email@kalitniki.com</li>
            </ul>
          </div>
          <div className={styles.rating}>
            <h4>Хорошее место</h4>
            <p>Выбор пользователей</p>
            <div className={styles.yandex}>
              <Image
                src="/yandex-icon.svg"
                alt="Yandex"
                width={20}
                height={20}
              />
              <span>5.0 ★</span>
            </div>
            <span>2276 отзывов</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>©2024 Калитниковские бани</span>
        <span>Все права защищены</span>
      </div>
    </footer>
  );
};

export default Footer;
