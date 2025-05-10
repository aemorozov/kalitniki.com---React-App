import Image from 'next/image';

import promo from '/public/img/mainPage/promo/promo.jpg';
import logo from '/public/img/mainPage/promo/logo.svg';

export const Promo = () => {
  return (
    <section className={'promo'}>
      <div className={'promo-content'}>
        <h2>
          Пространство для <span>отдыха</span>
          <br />с высоким <span>качеством</span> сервиса
        </h2>
      </div>
      <div className={'promo-banner'}>
        <div className={'promo-overlay'}>
          <Image src={promo} alt="Калитники фон" className="promo-bg" />
          <div className="promo-text">
            <Image src={logo} alt="Калитники" className="promo-logo" />
            <p className={'promo-p'}>
              Мягким паром, раскалённым жаром, чудесным ароматом трав
              <br /> пахнут настоящие Калитники!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
