import Link from 'next/link';
import classes from './Menu.module.css';
import arrowDown from '../../../img/header/IconDown.svg';
import Image from 'next/image';
import secondMenuItemImg from '../../../img/header/Icon_container.svg';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export const Menu = () => {
  const router = useRouter();

  const [openSubMenu, isOpenSubMenu] = useState('');
  const [addWidthMainItem, isAddWidthMainItem] = useState('');
  // const [active, setActive] = useState(false);

  const handleMouseEnter = (e: string) => {
    isOpenSubMenu(e);
    isAddWidthMainItem(classes.hoverFirstItem);
  };

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
        if (el.children) {
          return (
            <div>
              <li
                className={classNames(
                  classes.menuItem,
                  addWidthMainItem,
                  router.pathname === '/' + el.url && classes.activeItem
                )}
                onMouseEnter={() =>
                  handleMouseEnter(classes.containerSecondMenuOpen)
                }
                onMouseLeave={() => handleMouseLeave('')}
              >
                {el.title}
                <Image
                  src={arrowDown}
                  className={classes.arrowDown}
                  alt="Arrow down"
                />
              </li>
              <div
                className={classes.containerSecondMenu + ' ' + openSubMenu}
                onMouseEnter={() =>
                  handleMouseEnter(classes.containerSecondMenuOpen)
                }
                onMouseLeave={() => handleMouseLeave('')}
              >
                <div className={classes.mainBlockSecondMenu}>
                  {el.children.map((el) => {
                    return (
                      <Link
                        href={el.url}
                        className={classNames(
                          classes.menuItemSecondMenu,
                          router.pathname === '/' + el.url && classes.activeItem
                        )}
                      >
                        <Image
                          src={secondMenuItemImg}
                          alt="secondMenuItemImg"
                          className={classes.secondMenuItemImg}
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
          <li className={classes.li}>
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
