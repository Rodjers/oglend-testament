import React from 'react'
import dollar from './svg/dollar.svg';
import home from './svg/home.svg';
import fork from './svg/fork.svg';

const icon = ({height = 24, width = 24, style, icon}) => (
  <img src={icon} height={height} width={width} style={style} alt="Icon" />
);

export const Dollar = (props) => (
  icon({...props, icon: dollar})
);

export const Home = (props) => (
  icon({...props, icon: home})
);

export const Fork = (props) => (
  icon({...props, icon: fork})
);
