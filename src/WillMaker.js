import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AssetCard from './AssetCard';

class WillMaker extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>Testament</h1>
            <h2>Pliktdelsarv</h2>
            <p>En kortfattet tekst om pliktdelsarv som forklarer med ord de begrensninger vi har lagt inn i portalen.
            De eiendeler som ikke fordeles ved testament vil bli fordelt ihht. arveloven. </p>
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
              <AssetCard value="1 850 000,-" name="Nøtteveien 14A" type="home" grey/>
              <AssetCard value="550 000,-" name="VW Touran" type="car"/>
              <AssetCard value="1 950 000,-" name="Hytte i Sirdalen" type="home"/>
              <AssetCard value="3 000 000,-" type="business" split grey/>
              <AssetCard value="1 000 000,-" type="cash" split grey/>
              <AssetCard value="Resterende verdier" name="" type="cash" split grey/>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <h4>Ektefelle (Pliktdel: 360 000,-)</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <AssetCard name="Profitable Inc. (50%)" value="1 500 000,-" type="business" />
                  <AssetCard value="1 000 000,-" type="cash"/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>Barn 1 (Pliktdel: 1 000 000,-)</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <AssetCard value="1 850 000,-" name="Nøtteveien 14A" type="home"/>
                  <AssetCard name="Profitable Inc. (50%)" value="1 500 000,-" type="business"/>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>Røde Kors</h4>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <AssetCard value="Resterende verdier" name="" type="cash" split grey/>
                  <div style={{ height: '16px' }} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button type="button" className="btn btn-default">Legg til arving</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col">
            <h3>Andre elementer</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <AssetCard value="1G" name="Midler til gravfond" type="list-box"/>
          </div>
        </div>
        <div style={{ height: '16px' }} />
        <Link to="/form"><button className="btn btn-default">Tilbake</button></Link>
        <div style={{ display: 'inline-block', width: '8px' }} />
        <button className="btn btn-default">Lag Testamente</button>
      </div>
    );
  }
}

export default WillMaker;
