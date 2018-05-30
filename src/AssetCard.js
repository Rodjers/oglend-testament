import React from 'react';
import './App.css';
import { Home, Fork, Dollar } from './icons';

const card = {
  backgroundColor: 'white',
  boxShadow: '2px 2px lightgrey',
  borderRadius: '2px',
  padding: '8px',
};

const valueStyle = {
  display: 'inline-block',
  marginLeft: '16px',
};

const forkStyle = {
  display: 'inline-block',
  float: 'right',
  color: 'grey',
};

const AssetCard = ({value, name, type}) => {
  let typeIcon;

  switch (type) {
    case 'home': {
      typeIcon = <Home />;
      break;
    }
    case 'dollar': {
      typeIcon = <Dollar />;
      break;
    }
    default: {
      typeIcon = <Home />;
    }
  }

  return (
    <div style={card}>
      {typeIcon}
      <div style={valueStyle}>{value}</div>
      <div style={valueStyle}>{name}</div>
      <Fork style={forkStyle} />
    </div>
  );
};

export default AssetCard;
