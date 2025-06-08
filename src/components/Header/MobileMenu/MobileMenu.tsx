import { useState, useEffect } from 'react';
import styles from './MobileMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/img/header/Logo.svg';
import phone from '/public/img/mobileMenu/phone.svg';
import burger from '/public/img/mobileMenu/burger.svg';
import close from '/public/img/mobileMenu/close.svg';
import geo from '/public/img/mobileMenu/geo.svg';
import parking from '/public/img/mobileMenu/parking.svg';
import ten from '/public/img/mobileMenu/ten.svg';
import seven from '/public/img/mobileMenu/seven.svg';
import train from '/public/img/mobileMenu/train.svg';
import iconDown from '/public/img/header/iconDown.svg';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Блокировка прокрутки фона при открытом меню
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add('lock-scroll');
    } else {
      body.classList.remove('lock-scroll');
    }

    return () => {
      body.classList.remove('lock-scroll');
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <Link href={'/'}>
          <div className={styles.logo}>
            <Image src={logo} alt="Калитники" width={56} height={32} />
          </div>
        </Link>
        <div className={styles.icons}>
          <a href="tel:+79999999999" className={styles.phoneIcon}>
            <Image src={phone} alt="phone" width={32} height={32} />
          </a>
          <button onClick={() => setIsOpen(true)} className={styles.burger}>
            <Image src={burger} alt="burger" width={32} height={32} />
          </button>
        </div>
      </header>

      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuContainer}>
          <div className={styles.header}>
            <Link href={'/'}>
              <div className={styles.logo}>
                <Image src={logo} alt="Калитники" width={56} height={32} />
              </div>
            </Link>
            <div className={styles.icons}>
              <a href="tel:+79999999999" className={styles.phoneIcon}>
                <Image src={phone} alt="phone" width={32} height={32} />
              </a>
              <button onClick={() => setIsOpen(false)} className={styles.close}>
                <Image src={close} alt="close" width={32} height={32} />
              </button>
            </div>
          </div>

          <nav className={styles.nav}>
            <Link href="#">
              <div className={styles.menuItem}>
                Разряды <Image src={iconDown} alt="icon down" />
              </div>
            </Link>
            <Link href="#">
              <div className={styles.menuItem}>
                VIP-кабинеты <Image src={iconDown} alt="icon down" />
              </div>
            </Link>
            <Link href="#">
              <div className={styles.menuItem}>Услуги</div>
            </Link>
            <Link href="#">
              <div className={styles.menuItem}>Новости и акции</div>
            </Link>
            <Link href="#">
              <div className={styles.menuItem}>Кухня и бар</div>
            </Link>
            <Link href="#">
              <div className={styles.menuItem}>Контакты</div>
            </Link>
          </nav>
          <div className={styles.contactsBlock}>
            <div className={styles.contactsData}>
              <div className={styles.phone}>+7 495 678 10 01</div>
              <div className={styles.schedule}>
                Режим работы: ежедневно <br />
                09:00 — 23:00
              </div>
              <div className={styles.address}>
                Москва, ул. Большая <br /> Калитниковская, дом 42
              </div>
            </div>
            <button className={styles.mapLink}>Показать на карте</button>
            <div className={styles.plusses}>
              <div className={styles.plus}>
                <Image src={geo} alt="geo" />
                <span>Рядом ТТК</span>
              </div>
              <div className={styles.plus}>
                <Image src={parking} alt="parking" />
                <span>Своя парковка</span>
              </div>
              <div className={styles.plus}>
                <Image src={ten} alt="geo" />
                <span>Пролетарская</span>
              </div>
              <div className={styles.plus}>
                <Image src={seven} alt="geo" />
                <span>Таганская</span>
              </div>
              <div className={styles.plus}>
                <Image src={train} alt="geo" />
                <span>Платформа Калитники</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
