import Image from 'next/image';
import Link from 'next/link';
import { Menu } from './Menu';
import { ContactsZone } from './ContactsZone';
import classes from './Header.module.css';
import logo from '/public/img/header/Logo.svg';

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
