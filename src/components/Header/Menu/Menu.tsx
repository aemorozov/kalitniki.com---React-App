import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { menu } from '../../../constants/menu';
import arrowDown from '../../../img/header/IconDown.svg';
import classes from './Menu.module.css';
import secondMenuItemImg from '/public/img/header/Icon_container.svg';

export const Menu = () => {
  const { pathname } = useRouter();

  return (
    <ul className={classes.mainBlock}>
      {menu.map(({ name, subMenu, url }) => {
        // Если есть у пункта меню есть субменю, делаем особые стили и галочку
        if (subMenu) {
          const isSubMenuItemOpened = subMenu.some(
            ({ url }) => url === pathname
          );

          return (
            <li
              key={name}
              className={classNames(
                classes.menuItem,
                isSubMenuItemOpened && classes.activeItem
              )}
            >
              {name}
              <Image
                src={arrowDown}
                className={classNames(
                  classes.arrowDown,
                  isSubMenuItemOpened && classes.arrowActive
                )}
                alt="Arrow down"
              />
              {/* Субменю  */}
              <div className={classes.subMenuContainer}>
                <div className={classes.mainBlockSecondMenu}>
                  {/* Проходим по пунктам субменю */}
                  {subMenu.map((subMenuItem) => {
                    return (
                      <Link
                        key={subMenuItem.name}
                        href={subMenuItem.url}
                        className={classNames(
                          classes.subMenuItem,
                          pathname === subMenuItem.url && classes.activeItem
                        )}
                      >
                        <Image
                          src={secondMenuItemImg}
                          alt="secondMenuItemImg"
                          className={classNames(
                            classes.secondMenuItemImg,
                            pathname === subMenuItem.url &&
                              classes.activeSecondMenuItemImg
                          )}
                        />
                        {subMenuItem.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>
          );
        }

        return (
          <li className={classes.menuItem} key={name}>
            <Link
              href={url}
              className={classNames(
                classes.menuItem,
                pathname === url && classes.activeItem
              )}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
