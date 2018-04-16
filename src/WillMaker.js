import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class WillMaker extends Component {
  render() {
    return (
      <div>
        <p>Testament</p>
        <Link to="/">Tilbake</Link>
      </div>
    );
  }
}

export default WillMaker;
