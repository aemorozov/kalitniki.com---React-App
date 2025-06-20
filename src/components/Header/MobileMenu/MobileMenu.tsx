import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
import iconDown from '/public/img/header/IconDown.svg';
import secondMenuItemImg from '/public/img/header/Icon_container.svg';
import classNames from 'classnames';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRazryadyOpen, setIsRazryadyOpen] = useState(false);
  const [isVIPOpen, setIsVIPOpen] = useState(false);
  const router = useRouter();

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

  function isRazryadyOpenChange() {
    isRazryadyOpen === false
      ? setIsRazryadyOpen(true)
      : setIsRazryadyOpen(false);
  }

  function isVIPOpenChange() {
    isVIPOpen === false ? setIsVIPOpen(true) : setIsVIPOpen(false);
  }

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
            <Link href={'/'} onClick={() => setIsOpen(false)}>
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

          <div className={styles.nav}>
            <div>
              <div className={styles.menuItem} onClick={isRazryadyOpenChange}>
                Разряды
                <Image
                  src={iconDown}
                  className={classNames(
                    styles.iconDown,
                    isRazryadyOpen ? styles.rotated : ''
                  )}
                  alt="icon down"
                />
              </div>
              <div
                className={styles.subMenu}
                style={isRazryadyOpen ? { height: 105 + 'px' } : {}}
              >
                <Link
                  href={'/vysshiy-muzhskoy-razryad'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/vysshiy-muzhskoy-razryad'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Высший мужской разряд
                </Link>
                <Link
                  href={'/muzhskoy-razryad'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/muzhskoy-razryad'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Мужской разряд
                </Link>
                <Link
                  href={'/zhenskiy-razryad'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/zhenskiy-razryad'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Женский разряд
                </Link>
              </div>
            </div>
            <div onClick={isVIPOpenChange}>
              <div className={styles.menuItem}>
                VIP-кабинеты
                <Image
                  src={iconDown}
                  className={classNames(
                    styles.iconDown,
                    isVIPOpen ? styles.rotated : ''
                  )}
                  alt="icon down"
                />
              </div>
              <div
                className={styles.subMenu}
                style={isVIPOpen ? { height: 170 + 'px' } : {}}
              >
                <Link
                  href={'/turin'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/turin'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Турин
                </Link>
                <Link
                  href={'/rimsky'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/rimsky'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Римский
                </Link>
                <Link
                  href={'/bolshoi'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/bolshoi'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Большой
                </Link>
                <Link
                  href={'/malii'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/malii'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Малый
                </Link>
                <Link
                  href={'/comfort'}
                  onClick={() => setIsOpen(false)}
                  className={classNames(
                    styles.subMenuItem,
                    router.pathname === '/comfort'
                      ? styles.secondMenuActiveItem
                      : ''
                  )}
                >
                  <Image
                    src={secondMenuItemImg}
                    alt="secondMenuItemImg"
                    className={styles.secondMenuItemImg}
                  ></Image>
                  Комфорт
                </Link>
              </div>
            </div>
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
          </div>
          <div className={styles.contactsBlock}>
            <div className={styles.contactsData}>
              <div className={styles.phone}>+7 495 678 10 01</div>
              <div className={styles.schedule}>Режим работы:</div>
              <div className={styles.scheduleDays}>
                <div className={styles.scheduleDaysLine}>
                  <div className={styles.scheduleDaysLineDay}>Понедельник</div>
                  <div className={styles.scheduleDaysLineTime}>
                    11:00 — 23:00
                  </div>
                </div>
                <div className={styles.scheduleDaysLine}>
                  <div className={styles.scheduleDaysLineDay}>Вторник</div>
                  <div className={styles.scheduleDaysLineTime}>
                    11:00 — 23:00
                  </div>
                </div>
                <div className={styles.scheduleDaysLine}>
                  <div className={styles.scheduleDaysLineDay}>Среда</div>
                  <div className={styles.scheduleDaysLineTime}>
                    11:00 — 23:00
                  </div>
                </div>
                <div className={styles.scheduleDaysLine}>
                  <div className={styles.scheduleDaysLineDay}>Четверг</div>
                  <div className={styles.scheduleDaysLineTime}>
                    11:00 — 23:00
                  </div>
                </div>
                <div className={styles.scheduleDaysLine}>
                  <div className={styles.scheduleDaysLineDay}>Пятница</div>
                  <div className={styles.scheduleDaysLineTime}>
                    11:00 — 23:00
                  </div>
                </div>
                <div className={styles.scheduleDaysLine}>
                  <div className={styles.scheduleDaysLineDay}>Суббота</div>
                  <div className={styles.scheduleDaysLineTime}>
                    09:00 — 23:00
                  </div>
                </div>
                <div className={styles.scheduleDaysLine}>
                  <div className={styles.scheduleDaysLineDay}>Воскресенье</div>
                  <div className={styles.scheduleDaysLineTime}>
                    09:00 — 23:00
                  </div>
                </div>
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
