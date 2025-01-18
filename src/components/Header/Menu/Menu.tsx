import Link from 'next/link';
import classes from './Menu.module.css';
import arrowDown from '../../../img/header/IconDown.svg';
import Image from 'next/image';
import secondMenuItemImg from '../../../img/header/Icon_container.svg';

export const Menu = () => {
  return (
    <>
      <div className={classes.mainBlock}>
        <Link
          href={'news'}
          className={classes.menuItem + ' ' + classes.hoverItem}
        >
          Разряды
          <Image
            src={arrowDown}
            className={classes.arrowDown}
            alt="Arrow down"
            width={16}
            height={15}
          />
          <div className={classes.containerSecondMenu}>
            <div className={classes.mainBlockSecondMenu}>
              <Link href={'services'} className={classes.menuItemSecondMenu}>
                <Image
                  src={secondMenuItemImg}
                  alt="secondMenuItemImg"
                  className={classes.secondMenuItemImg}
                ></Image>
                Высший мужской разряд
              </Link>
              <Link href={'news'} className={classes.menuItemSecondMenu}>
                <Image
                  src={secondMenuItemImg}
                  alt="secondMenuItemImg"
                  className={classes.secondMenuItemImg}
                ></Image>
                Мужской разряд
              </Link>
              <Link href={'news'} className={classes.menuItemSecondMenu}>
                <Image
                  src={secondMenuItemImg}
                  alt="secondMenuItemImg"
                  className={classes.secondMenuItemImg}
                ></Image>
                Женский разряд
              </Link>
            </div>
          </div>
        </Link>
        <Link href={'news'} className={classes.menuItem}>
          VIP-Кабинеты
        </Link>
        <Link href={'news'} className={classes.menuItem}>
          Услуги
        </Link>
        <Link href={'news'} className={classes.menuItem}>
          Новости и акции
        </Link>
        <Link href={'news'} className={classes.menuItem}>
          Кухня и бар
        </Link>
        <Link href={'services'} className={classes.menuItem}>
          Контакты
        </Link>
      </div>
    </>
  );
};
