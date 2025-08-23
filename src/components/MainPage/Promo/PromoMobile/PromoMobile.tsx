import classNames from 'classnames';
import Image from 'next/image';
import styles from './PromoMobile.module.css';
import promo from '/public/img/mainPage/promo/background.jpg';

export const PromoMobile = () => {
  return (
    <section className={styles.promo}>
      <div className={classNames('headers', styles.headers)}>
        <h2 className={classNames('headerH2', styles.headerH2)}>
          <img
            src="/img/header/Icon_container.svg"
            alt="leaf"
            className={styles.leaf}
          />
          Для настоящего расслабления
        </h2>
        <h3 className={styles.headerH3}>
          Пространство
          <br />
          для отдыха с <span>высоким качеством</span> сервиса
        </h3>
      </div>
      <div className={styles.promoBanner}>
        <div className={styles.promoOverlay}>
          <Image src={promo} alt="Калитники фон" className={styles.promoBg} />
          <div className={styles.promoText}>
            <img
              src="/img/mainPage/promo/logo.svg"
              alt="Калитники"
              className={styles.promoLogo}
            />
            <p className={styles.promoP}>
              Мягким паром, раскалённым жаром, чудесным ароматом трав пахнут
              настоящие Калитники!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
