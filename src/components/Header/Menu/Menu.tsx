import Link from 'next/link';
import classes from './Menu.module.css';
import arrowDown from '../../../img/header/IconDown.svg';
import Image from 'next/image';

export const Menu = () => {
  return (
    <div className={classes.mainBlock}>
      <Link
        href={'news'}
        className={classes.menuItem + ' ' + classes.hoverItem}
      >
        Разряды{' '}
        <Image
          src={arrowDown}
          className={classes.arrowDown}
          alt="Arrow down"
          width={16}
          height={15}
        />
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
  );
};
