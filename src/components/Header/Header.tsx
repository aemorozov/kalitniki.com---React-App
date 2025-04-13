import { ContactsZone } from './ContactsZone/ContactsZone';
import classes from './Header.module.css';
import { Menu } from './Menu/Menu';

import { Link } from 'next-view-transitions';

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
