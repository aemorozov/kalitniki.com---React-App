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
