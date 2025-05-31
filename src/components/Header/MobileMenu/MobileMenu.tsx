import { useState, useEffect } from 'react';
import styles from './MobileMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/img/header/Logo.svg';
import phone from '/public/img/mobileMenu/phone.svg';
import burger from '/public/img/mobileMenu/burger.svg';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Блокировка прокрутки фона при открытом меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
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
            <Image src={phone} alt="Калитники" width={32} height={32} />
          </a>
          <button onClick={() => setIsOpen(true)} className={styles.burger}>
            <Image src={burger} alt="Калитники" width={32} height={32} />
          </button>
        </div>
      </header>

      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <Link href={'/'}>
            <Image src={logo} alt="Калитники" width={56} height={32} />
          </Link>
          <button onClick={() => setIsOpen(false)} className={styles.close}>
            ✕
          </button>
        </div>
        <nav className={styles.nav}>
          <Link href="#">
            <span>Разряды ▾</span>
          </Link>
          <Link href="#">
            <span>VIP-кабинеты ▾</span>
          </Link>
          <Link href="#">
            <span>Услуги</span>
          </Link>
          <Link href="#">
            <span>Новости и акции</span>
          </Link>
          <Link href="#">
            <span>Кухня и бар</span>
          </Link>
          <Link href="#">
            <span>Контакты</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
