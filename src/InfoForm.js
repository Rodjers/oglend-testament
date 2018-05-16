import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import InfoBox from './InfoBox';

const barn = () => (
  <div className="row">
    <div className="col-8">
      <div className="form-group">
        <label htmlFor="spouseName">Navn</label>
        <input type="text" className="form-control" id="spouseName" placeholder="Navn" />
      </div>
    </div>
    <div className="col">
    </div>
  </div>
);


class InfoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spouse: false,
      children: 0
    };
    this.onSpouseClick = this.onSpouseClick.bind(this);
    this.onChildrenChange = this.onChildrenChange.bind(this);
  }

  onSpouseClick(ev) {
    this.setState(
      { ...this.state,
        spouse: ev.target.checked
      }
    )
  }

  onChildrenChange(ev) {
    this.setState(
      { ...this.state,
        children: ev.target.value
      }
    )
  }

  render() {

    const children = [];
    for (let i = 0; i < this.state.children; i++) {
      children.push(barn());
    }

    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>Innformasjonsinhenting</h1>
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
                <input onChange={this.onSpouseClick} type="checkbox" className="form-check-input" id="spouseCheck"/>
                <label className="form-check-label" htmlFor="spouseCheck">Har ektefelle?</label>
              </div>
            </div>
            <div className="col">
              <InfoBox title="Ektefelle"
                       body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."/>
            </div>
          </div>
          { this.state.spouse &&
            <div className="row">
              <div className="col-8">
                <div className="form-group">
                  <label htmlFor="spouseName">Navn</label>
                  <input type="text" className="form-control" id="spouseName" placeholder="Navn"/>
                </div>
              </div>
              <div className="col">
              </div>
            </div>
          }
          <div className="row">
            <div className="col">
              <h3>Barn</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="form-group">
                <label htmlFor="childrenNumber">Hvor mange barn?</label>
                <input onChange={this.onChildrenChange} type="number" className="form-control" id="childrenNumber" defaultValue={0} />
              </div>
            </div>
            <div className="col">
              <InfoBox title="Barn" body="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."/>
            </div>
          </div>
          {children}
        </form>
        <Link to="/"><button className="btn btn-default">Tilbake</button></Link>
        <div style={{ display: 'inline-block', width: '8px' }} />
        <Link to="/will"><button className="btn btn-default">Til testament</button></Link>
      </div>
    );
  }
}

export default InfoForm;
