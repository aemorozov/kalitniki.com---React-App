import { FC } from 'react';
import { Menu } from './Header/Menu/Menu';
import { Header } from './Header/Header';

export const Layout: FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
