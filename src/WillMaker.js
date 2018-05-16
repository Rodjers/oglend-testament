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
        <form>
          <div style={{ height: '40px' }} />
          <div className="row">
            <div className="col">
              <h3>Fordeling</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Ektefelle</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Type</label>
                <input type="text" className="form-control" id="spouseName" value="Kontanter" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Verdi</label>
                <input type="text" className="form-control" id="spouseName" value="4 000 000,-" />
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-default">Legg til aktiva</button>
              <div style={{ height: '16px' }} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Barn 1</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Type</label>
                <input type="text" className="form-control" id="spouseName" value="Leilighet, Nøtteveien 14A" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Verdi</label>
                <input type="text" className="form-control" id="spouseName" value="1 850 000,-" />
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Type</label>
                <input type="text" className="form-control" id="spouseName" value="Kontanter" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Verdi</label>
                <input type="text" className="form-control" id="spouseName" value="150 000,-" />
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-default">Legg til aktiva</button>
              <div style={{ height: '16px' }} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Barn 2</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Type</label>
                <input type="text" className="form-control" id="spouseName" value="Kontanter" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Verdi</label>
                <input type="text" className="form-control" id="spouseName" value="2 000 000,-" />
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-default">Legg til aktiva</button>
              <div style={{ height: '16px' }} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Barn 3</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Type</label>
                <input type="text" className="form-control" id="spouseName" value="Kontanter" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Verdi</label>
                <input type="text" className="form-control" id="spouseName" value="2 000 000,-" />
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-default">Legg til aktiva</button>
              <div style={{ height: '16px' }} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Røde Kors</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Type</label>
                <input type="text" className="form-control" id="spouseName" value="Kontanter" />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label htmlFor="spouseName">Verdi</label>
                <input type="text" className="form-control" id="spouseName" value="10 000 000,-" />
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-default">Legg til aktiva</button>
              <div style={{ height: '16px' }} />
            </div>
          </div>
        </form>
        <button className="btn btn-default">Legg til arving</button>
        <div style={{ height: '16px' }} />
        <Link to="/form"><button className="btn btn-default">Tilbake</button></Link>
        <div style={{ display: 'inline-block', width: '8px' }} />
        <button className="btn btn-default">Lag Testamente</button>
      </div>
    );
  }
}

export default WillMaker;
