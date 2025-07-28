import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styles from './MobileMenu.module.css';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRazryadyOpen, setIsRazryadyOpen] = useState(false);
  const [isVIPOpen, setIsVIPOpen] = useState(false);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

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
        { name: 'Комфорт', url: '/comfort' },
        { name: 'Римский', url: '/rimsky' },
        { name: 'Большой', url: '/bolshoi' },
        { name: 'Малый', url: '/malii' }
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

  function closeAll() {
    scrollRef.current?.scrollTo({ top: 0 });
    setIsOpen(false);
    setIsRazryadyOpen(false);
    setIsVIPOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        <Link href={'/'}>
          <div className={styles.logo}>
            <img
              src="/img/header/Logo.svg"
              alt="Калитники"
              width={56}
              height={32}
            />
          </div>
        </Link>
        <div className={styles.icons}>
          <a href="tel:+79999999999" className={styles.phoneIcon}>
            <img
              src="/img/mobileMenu/phone.svg"
              alt="phone"
              width={32}
              height={32}
            />
          </a>
          <button onClick={() => setIsOpen(true)} className={styles.burger}>
            <img
              src="/img/mobileMenu/burger.svg"
              alt="burger"
              width={32}
              height={32}
            />
          </button>
        </div>
      </header>

      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuContainer} ref={scrollRef}>
          <div className={styles.header}>
            <Link
              href={'/'}
              onClick={() => {
                setIsOpen(false);
                closeAll();
              }}
            >
              <div className={styles.logo}>
                <img
                  src="/img/header/Logo.svg"
                  alt="Калитники"
                  width={56}
                  height={32}
                />
              </div>
            </Link>
            <div className={styles.icons}>
              <a href="tel:+79999999999" className={styles.phoneIcon}>
                <img
                  src="/img/mobileMenu/phone.svg"
                  alt="phone"
                  width={32}
                  height={32}
                />
              </a>
              <button onClick={() => setIsOpen(false)} className={styles.close}>
                <img
                  src="/img/mobileMenu/close.svg"
                  alt="close"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
          <div className={styles.nav}>
            {mobileMenuData?.map((el) => {
              if (el.subMenu) {
                return (
                  <div key={el.name}>
                    <div className={styles.menuItem} onClick={el.function}>
                      {el.name}
                      <img
                        src="/img/header/IconDown.svg"
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
                            key={el.name}
                            href={el.url}
                            onClick={() => {
                              closeAll();
                            }}
                            className={classNames(
                              styles.subMenuItem,
                              router.pathname === el.url
                                ? styles.secondMenuActiveItem
                                : ''
                            )}
                          >
                            <img
                              src="/img/header/Icon_container.svg"
                              alt="secondMenuItemImg"
                              className={styles.secondMenuItemImg}
                            />
                            {el.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                return (
                  <Link
                    href={el.url}
                    onClick={() => {
                      closeAll();
                    }}
                    key={el.name}
                  >
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
                <img src="/img/mobileMenu/geo.svg" alt="geo" />
                <span>Рядом ТТК</span>
              </div>
              <div className={styles.plus}>
                <img src="/img/mobileMenu/parking.svg" alt="parking" />
                <span>Своя парковка</span>
              </div>
              <div className={styles.plus}>
                <img src="/img/mobileMenu/ten.svg" alt="geo" />
                <span>Пролетарская</span>
              </div>
              <div className={styles.plus}>
                <img src="/img/mobileMenu/seven.svg" alt="geo" />
                <span>Таганская</span>
              </div>
              <div className={styles.plus}>
                <img src="/img/mobileMenu/train.svg" alt="geo" />
                <span>Платформа Калитники</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
