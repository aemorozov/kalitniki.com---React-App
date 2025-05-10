import { FC, ReactNode } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
