'use client';
import classNames from 'classnames';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import classes from './Menu.module.css';

export const Menu = () => {
  const pathname = usePathname();

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
                    pathname === '/' + el.url && classes.activeItem,
                    el.children.find((el) => '/' + el.url === pathname) &&
                      classes.arrowActive
                  )}
                  // Открываем и закрываем субменю
                  onMouseEnter={() =>
                    handleMouseEnter(classes.containerSecondMenuOpen)
                  }
                  onMouseLeave={() => handleMouseLeave('')}
                >
                  {el.title}
                  <img
                    src="/img/header/IconDown.svg"
                    className={classNames(
                      classes.arrowDown,
                      pathname === '/' + el.url && classes.arrowActive,
                      el.children.find((el) => '/' + el.url === pathname) &&
                        classes.arrowActive
                    )}
                    alt="Открыть подменю"
                  />
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
                          pathname === '/' + el.url && classes.activeItem
                        )}
                      >
                        <img
                          // Это тоже надо вынести в стиле, не надо эта картинка сюда пихать. Это бэкграунд внутри контейнера с названием страницы.
                          src="/img/header/Icon_container.svg"
                          alt=""
                          className={classNames(
                            classes.secondMenuItemImg,
                            pathname === '/' + el.url &&
                              classes.activeSecondMenuItemImg
                          )}
                        ></img>
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
                pathname === '/' + el.url && classes.activeItem
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
