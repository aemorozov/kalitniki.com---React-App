import { FC } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

export const Layout: FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
