import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import InfoBox from './InfoBox';

class InfoForm extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>Skjema</h1>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col">
              <h3>Arvelater</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <label htmlFor="testatorName">Navn</label>
                <input type="text" className="form-control" id="testatorName" placeholder="Navn"/>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Ektefelle</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="spouseCheck"/>
                <label className="form-check-label" htmlFor="spouseCheck">Har ektefelle?</label>
              </div>
            </div>
            <div className="col">
              <InfoBox title="Ektefelle" body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."/>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <label htmlFor="spouseName">Navn</label>
                <input type="text" className="form-control" id="spouseName" placeholder="Navn"/>
              </div>
            </div>
            <div className="col">
              <InfoBox title="Ektefelle" body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Barn</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <label htmlFor="childrenNumber">Hvor mange barn?</label>
                <input type="number" className="form-control" id="childrenNumber" defaultValue={0} />
              </div>
            </div>
            <div className="col">
              <InfoBox title="Ektefelle" body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."/>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <label htmlFor="spouseName">Navn</label>
                <input type="text" className="form-control" id="spouseName" placeholder="Navn" />
              </div>
            </div>
            <div className="col">
              <InfoBox title="Ektefelle" body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."/>
            </div>
          </div>
        </form>
        <Link to="/will"><button className="btn btn-default">Til testament</button></Link>
      </div>
    );
  }
}

export default InfoForm;
