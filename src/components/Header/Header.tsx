import Image from 'next/image';
import Link from 'next/link';
import logo from '../../img/header/Logo.svg';
import { ContactsZone } from './ContactsZone';
import classes from './Header.module.css';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <div className={classes.header}>
      <Link href="/">
        <Image
          src={logo}
          alt="Калитниковские бани лого"
          width={74}
          height={44}
        />
      </Link>
      <Menu />
      <ContactsZone />
    </div>
  );
};
