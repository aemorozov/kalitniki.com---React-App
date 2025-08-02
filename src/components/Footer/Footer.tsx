import Link from 'next/link';
import { bottomMenu } from '../../constants/menu';
import Location from '../../img/footer/location.svg';
import VK from '../../img/footer/vk.svg';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <>
      <div className="footerBanner">
        <img
          src="/img/footer/banner.avif"
          alt="footer banner"
          width={1440}
          height={300}
        />
      </div>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <img
              src="/img/header/Logo.svg"
              alt="Калитники"
              className={styles.logo}
              width="82"
              height="49"
            />
            <p className={styles.littleHeader}>Банный комплекс</p>
            <p className={styles.littleText}>
              Москва,
              <br />
              Большая Калитниковская, дом 42
            </p>
            <div className={styles.icons}>
              <a
                href="https://vk.com/kalitnikovskie"
                target="_blank"
                title="Калитниковские бани во Вконтакте"
                className={styles.iconLink}
              >
                <VK
                  alt="Калитниковские бани во Вконтакте"
                  className={styles.icon}
                />
              </a>
              <a
                href="https://yandex.ru/maps/-/CHX~ED-1"
                target="_blank"
                title="Калитниковские бани на Яндекс-картах"
                className={styles.iconLink}
              >
                <Location
                  alt="Калитниковские бани на Яндекс-картах"
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <div className={styles.rows}>
            {bottomMenu.map(({ name, subMenu }) => (
              <div className={styles.box} key={name}>
                <h4 className={styles.menuHeader}>{name}</h4>
                <ul className={styles.menus}>
                  {subMenu?.map(({ name, url, isContact }) => (
                    <li key={url}>
                      {isContact && (
                        <a href={url} className={styles.link}>
                          {name}
                        </a>
                      )}
                      {!isContact && (
                        <Link href={url} className={styles.link}>
                          {name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.rating}>
              <h4 className={styles.menuHeader}>Хорошее место</h4>
              <p className={styles.textChoice}>Выбор пользователей</p>
              <div className={styles.yandex}>
                <img
                  src="/img/footer/ya.svg"
                  alt="Yandex"
                  width="24"
                  height="24"
                />
                <div className={styles.five}>5.0</div>
                <div>
                  <div className={styles.stars}>
                    {[...new Array(5)].map((_, index) => (
                      <img
                        src="/img/mainPage/otzuvu/star.svg"
                        alt="star"
                        width="16"
                        height="16"
                        key={index}
                      />
                    ))}
                  </div>
                  <div className={styles.count}>2276 отзывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
      </footer>
      <div className={styles.bottom}>
        <span>Все права защищены</span>
        <span>© {new Date().getFullYear()} Калитниковские бани</span>
      </div>
    </>
  );
};
