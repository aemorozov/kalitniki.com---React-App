import classes from './Header.module.css';
import { Menu } from './Menu/Menu';
import { ContactsZone } from './ContactsZone/ContactsZone';
import logo from '../../img/header/Logo.svg';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className={classes.header}>
      <Image
        src={logo}
        alt="Калитниковские бани лого"
        width={73.33}
        height={43.98}
      />
      <Menu />
      <ContactsZone />
    </div>
  );
};
