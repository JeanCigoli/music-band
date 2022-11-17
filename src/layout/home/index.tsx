import React from 'react';
import { Container } from './styled';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Home = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Home;
