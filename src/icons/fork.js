import React from 'react'
import fork from './svg/fork.svg';

const Fork = ({height = 24, width = 24, style}) => (
  <img src={fork} height={height} width={width} style={style} alt="Dele" />
);

export default Fork;
