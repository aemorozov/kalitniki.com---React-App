import Link from 'next/link';
import classes from './Menu.module.css';
import arrowDown from '../../../img/header/IconDown.svg';
import Image from 'next/image';
import secondMenuItemImg from '../../../img/header/Icon_container.svg';
import { useState } from 'react';

export const Menu = () => {
  const [openSubMenu, isOpenSubMenu] = useState('');
  const [addWidthMainItem, isAddWidthMainItem] = useState('');

  const handleMouseEnter = (e: string) => {
    isOpenSubMenu(e);
    isAddWidthMainItem(classes.hoverFirstItem);
  };

  const handleMouseLeave = (e: string) => {
    isOpenSubMenu(e);
    isAddWidthMainItem('');
  };

  return (
    <>
      <div className={classes.mainBlock}>
        <div
          className={classes.containerSecondMenu + ' ' + openSubMenu}
          onMouseEnter={() => handleMouseEnter(classes.containerSecondMenuOpen)}
          onMouseLeave={() => handleMouseLeave('')}
        >
          <div className={classes.mainBlockSecondMenu}>
            <Link
              href={'vysshiy-muzhskoy-razryad'}
              className={classes.menuItemSecondMenu}
            >
              <Image
                src={secondMenuItemImg}
                alt="secondMenuItemImg"
                className={classes.secondMenuItemImg}
              ></Image>
              Высший мужской разряд
            </Link>
            <Link
              href={'muzhskoy-razryad'}
              className={classes.menuItemSecondMenu}
            >
              <Image
                src={secondMenuItemImg}
                alt="secondMenuItemImg"
                className={classes.secondMenuItemImg}
              ></Image>
              Мужской разряд
            </Link>
            <Link
              href={'zhenskiy-razryad'}
              className={classes.menuItemSecondMenu}
            >
              <Image
                src={secondMenuItemImg}
                alt="secondMenuItemImg"
                className={classes.secondMenuItemImg}
              ></Image>
              Женский разряд
            </Link>
          </div>
        </div>
        <Link
          href={'news'}
          className={classes.menuItem + ' ' + addWidthMainItem}
          onMouseEnter={() => handleMouseEnter(classes.containerSecondMenuOpen)}
          onMouseLeave={() => handleMouseLeave('')}
        >
          Разряды
          <Image
            src={arrowDown}
            className={classes.arrowDown}
            alt="Arrow down"
            width={16}
            height={15}
          />
        </Link>
        <Link href={'vip-kabinety'} className={classes.menuItem}>
          VIP-Кабинеты
        </Link>
        <Link href={'uslugi'} className={classes.menuItem}>
          Услуги
        </Link>
        <Link href={'novosti-i-aktsii'} className={classes.menuItem}>
          Новости и акции
        </Link>
        <Link href={'kukhnya-i-bar'} className={classes.menuItem}>
          Кухня и бар
        </Link>
        <Link href={'kontakty'} className={classes.menuItem}>
          Контакты
        </Link>
      </div>
    </>
  );
};
