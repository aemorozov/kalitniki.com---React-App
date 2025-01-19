import { FC, ReactNode } from 'react';
import { Header } from './Header';

export const Layout: FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
