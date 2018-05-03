import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PieChart from './PieChart';

class WillMaker extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>Testament</h1>
            <PieChart data={[5,10,1,3]} size={[500,500]} />
          </div>
        </div>
        <Link to="/"><button className="btn btn-default">Tilbake</button></Link>
      </div>
    );
  }
}

export default WillMaker;
