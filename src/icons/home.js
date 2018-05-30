import React from 'react'
import home from './svg/home.svg';

const Home = ({height = 24, width = 24}) => (
  <img src={home} height={height} width={width} alt="Hus" />
);

export default Home;
