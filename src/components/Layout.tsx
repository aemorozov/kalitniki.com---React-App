import { FC, ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { MobileMenu } from './Header/MobileMenu/MobileMenu';

export const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <MobileMenu />
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
