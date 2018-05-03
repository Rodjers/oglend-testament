import React, {Component} from 'react';
import './App.css';

class InfoForm extends Component {
  render() {
    return (
      <div className="info-box">
        <div className="info-box-title">
          {this.props.title.toUpperCase()}
        </div>
        <div className="info-box-body">
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default InfoForm;
