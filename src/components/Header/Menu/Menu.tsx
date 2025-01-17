import Link from 'next/link';
import classes from './Menu.module.css';

export const Menu = () => {
  return (
    <div className={classes.mainBlock}>
      <Link href={'news'} className={classes.menuItem}>
        Разряды
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
