import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import InfoBox from './InfoBox';
import Asset from './Asset';

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
      children: 0,
      weirdOwn: false,
      numOfAssets: 1,
    };
    this.onSpouseClick = this.onSpouseClick.bind(this);
    this.onChildrenChange = this.onChildrenChange.bind(this);
    this.onWeirdOwnClick = this.onWeirdOwnClick.bind(this);
    this.onAddAssetClick = this.onAddAssetClick.bind(this);
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

  onWeirdOwnClick(ev) {
    this.setState(
      { ...this.state,
        weirdOwn: ev.target.checked
      }
    )
  }

  onAddAssetClick() {
    this.setState({
      ...this.state,
      numOfAssets: this.state.numOfAssets + 1
    })
  }

  render() {

    const children = [];
    for (let i = 0; i < this.state.children; i++) {
      children.push(barn());
    }

    const assets = [];
    for (let i = 0; i < this.state.numOfAssets; i++) {
      assets.push(<Asset id={i} key={i}/>);
    }

    return (
      <div>
        <div className="row">
          <div className="col">
            <h1>Innformasjonsinhenting</h1>
            <p>Vi trenger litt informasjon fra deg for å finne hvilket spillerom du har for å testamentere av dine verdier innenfor arvelovens begrensinger.</p>
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
            <div className="col-8">
              <div className="form-check">
                <input onChange={this.onSpouseClick} type="checkbox" className="form-check-input" id="spouseCheck"/>
                <label className="form-check-label" htmlFor="spouseCheck">Har du ektefelle?</label>
              </div>
            </div>
            <div className="col">
              <InfoBox title="Ektefelle"
                       body="Med ektefelle menes at man er gift ihht. ekteskapsloven eller at man er samboere med en samboeravtale..."/>
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
              <InfoBox title="Barn" body='Oppgi antall barn som er dine. Dvs barn med evt. nåværende ektefelle og barn fra tidligere forhold.' />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h4>Eiendeler</h4>
            </div>
          </div>
          {assets}
          <div className="row">
            <div className="col">
              <button type="button" onClick={this.onAddAssetClick} className="btn btn-default">Legg til eiendel</button>
              <div style={{ height: '16px' }} />
            </div>
          </div>
          { this.state.spouse &&
          <div>
            <div className="row">
              <div className="col">
                <h3>Ektefelle</h3>
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
              </div>
            </div>
          </div>
          }
          {this.state.children > 0 &&
          <div>
            <div className="row">
              <div className="col">
                <h3>Barn</h3>
              </div>
            </div>
            {children}
          </div>
          }
          <div className="row">
            <div className="col">
              <h3>Disclaimer</h3>
              <p>Her kan vi legge inn litt informasjon om hva som ikke er dekket av denne portalen og noe sjekkbokser som må
              krysses av. F.eks en boks hvor bruker bekrefter at hen ikke sitter i uskiftet bo, at ikke det er odel involvert o.l.</p>
            </div>
          </div>
        </form>
        <Link to="/"><button className="btn btn-default">Tilbake</button></Link>
        <div style={{ display: 'inline-block', width: '8px' }} />
        <Link to="/will"><button className="btn btn-default">Til testament</button></Link>
      </div>
    );
  }
}

export default InfoForm;
