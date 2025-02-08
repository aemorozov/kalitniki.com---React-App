import classes from './Header.module.css';
import { Menu } from './Menu/Menu';
import { ContactsZone } from './ContactsZone/ContactsZone';
import logo from '../../img/header/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={classes.header}>
      <Link href={'/'}>
        <Image
          src={logo}
          alt="Калитниковские бани лого"
          // className={classes.mainLogo}
          priority
        />
      </Link>
      <Menu />
      <ContactsZone />
    </div>
  );
};
