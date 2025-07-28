import Link from 'next/link';
import { ContactsZone } from './ContactsZone';
import classes from './Header.module.css';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <div className={classes.header}>
      <Link href={'/'}>
        <img
          src="/img/header/Logo.svg"
          alt="Калитниковские бани лого"
          // className={classes.mainLogo}
        />
      </Link>
      <Menu />
      <ContactsZone />
    </div>
  );
};
