import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class InfoForm extends Component {
  render() {
    return (
      <div>
        <p>Skjema</p>
        <Link to="/will">Til skjema</Link>
      </div>
    );
  }
}

export default InfoForm;
