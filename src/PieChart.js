import React, {Component} from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import './App.css';
import image from './chart.png';

class PieChart extends Component {

  render() {
    return <img src={image} />
  }
}

export default PieChart;
