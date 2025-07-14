import Image from 'next/image';
import styles from './Promo.module.css';
import classNames from 'classnames';

import promo from '/public/img/mainPage/promo/background.jpg';
import logo from '/public/img/mainPage/promo/logo.svg';
import leaf from '/public/img/header/Icon_container.svg';

export const Promo = () => {
  return (
    <section className={'promo'}>
      <div className={classNames('headers', styles.headers)}>
        <h2 className={classNames('headerH2', styles.headerH2)}>
          <Image src={leaf} alt="leaf" className={styles.leaf} />
          Для настоящего отдыха и расслабления
        </h2>
        <h3 className={'headerH3'}>
          Пространство для <span>отдыха</span>
          <br />с высоким <span>качеством</span> сервиса
        </h3>
      </div>
      <div className={'promo-banner'}>
        <div className={'promo-overlay'}>
          <Image src={promo} alt="Калитники фон" className="promo-bg" />
          <div className="promo-text">
            <Image src={logo} alt="Калитники" className="promo-logo" />
            <p className={'promo-p'}>
              Мягким паром, раскалённым жаром, чудесным ароматом трав, <br />
              сухим листом дубовым, прохладой зимнего леса — <br />
              вот, чем пахнут настоящие Калитники!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
