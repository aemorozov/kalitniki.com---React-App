import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { topMenu } from '../../../constants/menu';
import ArrowDown from '../../../img/header/IconDown.svg';
import Leaf from '../../../img/header/Icon_container.svg';
import classes from './Menu.module.css';

export const Menu = () => {
  const { pathname, push } = useRouter();

  return (
    <ul className={classes.mainBlock}>
      {topMenu.map(({ name, subMenu, url }) => {
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
              <ArrowDown className={classes.arrowDown} alt="Arrow down" />
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
                        <Leaf
                          alt="secondMenuItemImg"
                          className={classNames(classes.secondMenuItemImg)}
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
          <li className={classes.menuItem} key={name} onClick={() => push(url)}>
            <Link
              href={url}
              className={classNames(
                classes.menuItemLink,
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
