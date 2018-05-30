import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import PieChart from './PieChart';
import AssetCard from './AssetCard';

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
            <div className="col-6">
              <h3>Eiendeler</h3>
            </div>
            <div className="col-6">
              <h3>Fordeling</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <AssetCard value="1 850 000,-" name="Nøtteveien 14A" type="home"/>
              <div style={{ height: '16px' }} />
              <AssetCard value="1 000 000,-" type="dollar"/>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <h4>Ektefelle</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Type</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="Kontanter" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Verdi</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="4 000 000,-" />
                  </div>
                </div>
                <div className="col">
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-default">Legg til</button>
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
                    <input type="text" className="form-control" id="spouseName" defaultValue="Leilighet, Nøtteveien 14A" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Verdi</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="1 850 000,-" />
                  </div>
                </div>
                <div className="col">
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Type</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="Kontanter" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Verdi</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="150 000,-" />
                  </div>
                </div>
                <div className="col">
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-default">Legg til</button>
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
                    <input type="text" className="form-control" id="spouseName" defaultValue="Kontanter" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Verdi</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="2 000 000,-" />
                  </div>
                </div>
                <div className="col">
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-default">Legg til</button>
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
                    <input type="text" className="form-control" id="spouseName" defaultValue="Kontanter" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Verdi</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="2 000 000,-" />
                  </div>
                </div>
                <div className="col">
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-default">Legg til</button>
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
                    <input type="text" className="form-control" id="spouseName" defaultValue="Kontanter" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group">
                    <label htmlFor="spouseName">Verdi</label>
                    <input type="text" className="form-control" id="spouseName" defaultValue="10 000 000,-" />
                  </div>
                </div>
                <div className="col">
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn btn-default">Legg til</button>
                  <div style={{ height: '16px' }} />
                  <button type="button" className="btn btn-default">Legg til arving</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div style={{ height: '16px' }} />
        <Link to="/form"><button className="btn btn-default">Tilbake</button></Link>
        <div style={{ display: 'inline-block', width: '8px' }} />
        <button className="btn btn-default">Lag Testamente</button>
      </div>
    );
  }
}

export default WillMaker;
