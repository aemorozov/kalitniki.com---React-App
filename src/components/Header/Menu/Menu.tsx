import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import secondMenuItemImg from '../../../img/header/Icon_container.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export const Menu = () => {
  const router = useRouter();

  const [openSubMenu, isOpenSubMenu] = useState('');
  const [addWidthMainItem, isAddWidthMainItem] = useState('');

  // Наведение курсора на пункт меню
  const handleMouseEnter = (e: string) => {
    isOpenSubMenu(e);
    isAddWidthMainItem(classes.hoverFirstItem);
  };

  // Убираем курсор с пункта меню
  const handleMouseLeave = (e: string) => {
    isOpenSubMenu(e);
    isAddWidthMainItem('');
  };


  const pages = [
    {
      title: 'Разряды',
      url: 'razryadi',
      children: [
        { title: 'Высший мужской разряд', url: 'vysshiy-muzhskoy-razryad' },
        { title: 'Мужской разряд', url: 'muzhskoy-razryad' },
        { title: 'Женский разряд', url: 'zhenskiy-razryad' }
      ]
    },
    { title: 'VIP-Кабинеты', url: 'vip-kabinety' },
    { title: 'Услуги', url: 'uslugi' },
    { title: 'Новости и акции', url: 'novosti-i-aktsii' },
    { title: 'Кухня и бар', url: 'kukhnya-i-bar' },
    { title: 'Контакты', url: 'kontakty' }
  ];

  return (
    <ul className={classes.mainBlock}>
      {pages.map((el) => {
        // Если есть у пункта меню есть субменю, делаем особые стили и галочку
        if (el.children) {
          return (
            <div key={el.title}>
              <li className={classes.li}>
                <Link
                  href={el.url}
                  className={classNames(
                    classes.menuItem,
                    addWidthMainItem,

                    // Сравниваем путь для подсветки пункта меню
                    router.pathname === '/' + el.url && classes.activeItem,
                    el.children.find(
                      (el) => '/' + el.url === router.pathname
                    ) && classes.arrowActive
                  )}
                  // Открываем и закрываем субменю
                  onMouseEnter={() =>
                    handleMouseEnter(classes.containerSecondMenuOpen)
                  }
                  onMouseLeave={() => handleMouseLeave('')}
                >
                  {el.title}
                  <Image
                    src={arrowDown}
                    className={classNames(
                      classes.arrowDown,
                      router.pathname === '/' + el.url && classes.arrowActive,
                      el.children.find(
                        (el) => '/' + el.url === router.pathname
                      ) && classes.arrowActive
                    )}
                    alt="Arrow down"
                  ></Image>
                </Link>
              </li>

              {/* Субменю  */}
              <div
                className={classes.containerSecondMenu + ' ' + openSubMenu}
                onMouseEnter={() =>
                  handleMouseEnter(classes.containerSecondMenuOpen)
                }
                onMouseLeave={() => handleMouseLeave('')}
              >
                <div className={classes.mainBlockSecondMenu}>
                  {/* Проходим по пунктам субменю */}
                  {el.children.map((el) => {
                    return (
                      <Link
                        key={el.title}
                        href={el.url}
                        className={classNames(
                          classes.menuItemSecondMenu,
                          router.pathname === '/' + el.url && classes.activeItem
                        )}
                      >
                        <Image
                          src={secondMenuItemImg}
                          alt="secondMenuItemImg"
                          className={classNames(
                            classes.secondMenuItemImg,
                            router.pathname === '/' + el.url &&
                              classes.activeSecondMenuItemImg
                          )}
                        ></Image>
                        {el.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

        return (
          <li className={classes.li} key={el.title}>
            <Link
              href={el.url}
              className={classNames(
                classes.menuItem,
                router.pathname === '/' + el.url && classes.activeItem
              )}
            >
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};