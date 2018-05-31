import React from 'react';
import './App.css';

const valueStyle = {
  display: 'inline-block',
  marginLeft: '16px',
};

const AssetCard = ({value, name, type, split, grey}) => {

  let card = {
    backgroundColor: 'white',
    boxShadow: '2px 2px lightgrey',
    borderRadius: '2px',
    padding: '8px',
    marginBottom: '16px',
  };

  if (grey) {
    card.backgroundColor = '#DDD'
  }
  return (
    <div style={card}>
      <ion-icon name={type} size="large" />
      <div style={valueStyle}>{value}</div>
      <div style={valueStyle}>{name}</div>
      {split && <ion-icon style={{ float: 'right' }} name="git-network" />}
    </div>
  );
};

export default AssetCard;
