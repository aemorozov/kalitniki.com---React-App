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

  const mobileMenuData = [
    {
      name: 'Разряды',
      subMenu: [
        { name: 'Высший мужской разряд', url: '/vysshiy-muzhskoy-razryad' },
        { name: 'Мужской разряд', url: '/muzhskoy-razryad' },
        { name: 'Женский разряд', url: '/zhenskiy-razryad' }
      ],
      height: 105,
      function: isRazryadyOpenChange,
      constant: isRazryadyOpen
    },
    {
      name: 'VIP-кабинеты',
      subMenu: [
        { name: 'Турин', url: '/turin' },
        { name: 'Римский', url: '/rimsky' },
        { name: 'Большой', url: '/bolshoi' },
        { name: 'Малый', url: '/malii' },
        { name: 'Комфорт', url: '/comfort' }
      ],
      height: 170,
      function: isVIPOpenChange,
      constant: isVIPOpen
    },
    {
      name: 'Услуги',
      url: '/uslugi'
    },
    {
      name: 'Новости и акции',
      url: '/novosti-i-aktsii'
    },
    {
      name: 'Кухня и бар',
      url: '/kukhnya-i-bar'
    },
    {
      name: 'Контакты',
      url: '/kontakty'
    }
  ];

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
            {mobileMenuData?.map((el) => {
              if (el.subMenu) {
                return (
                  <div>
                    <div className={styles.menuItem} onClick={el.function}>
                      {el.name}
                      <Image
                        src={iconDown}
                        className={classNames(
                          styles.iconDown,
                          el.constant ? styles.rotated : ''
                        )}
                        alt="icon down"
                      />
                    </div>
                    <div
                      className={styles.subMenu}
                      style={el.constant ? { height: el.height + 'px' } : {}}
                    >
                      {el.subMenu?.map((el) => {
                        return (
                          <Link
                            href={el.url}
                            onClick={() => setIsOpen(false)}
                            className={classNames(
                              styles.subMenuItem,
                              router.pathname === el.url
                                ? styles.secondMenuActiveItem
                                : ''
                            )}
                          >
                            <Image
                              src={secondMenuItemImg}
                              alt="secondMenuItemImg"
                              className={styles.secondMenuItemImg}
                            ></Image>
                            {el.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link href={el.url}>
                    <div className={styles.menuItem}>{el.name}</div>
                  </Link>
                );
              }
            })}
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
