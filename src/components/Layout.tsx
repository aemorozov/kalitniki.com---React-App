import { FC } from 'react';
import { Header } from './Header/Header';

export const Layout: FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
