import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import logo from './logo.png';
import './App.css';
import InfoForm from './InfoForm';
import InfoPage from './InfoPage';
import WillMaker from './WillMaker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Testamentportal</h1>
        </header>
        <div className="App-container">
          <BrowserRouter>
            <div className="container form-container">
              <Route exact path="/" component={InfoPage} />
              <Route exact path="/form" component={InfoForm} />
              <Route path="/will" component={WillMaker} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
