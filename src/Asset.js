import React from 'react';
import './App.css';

const Asset = ({id}) => {
  return (
    <div className="row">
      <div className="col-3">
        <div className="form-group">
          <label htmlFor="spouseName">Type</label>
          <input type="text" className="form-control" id="spouseName" defaultValue="Kontanter" />
        </div>
      </div>
      <div className="col-3">
        <div className="form-group">
          <label htmlFor="spouseName">Verdi</label>
          <input type="text" className="form-control" id="spouseName" defaultValue="10 000 000,-" />
        </div>
      </div>
      <div className="col-2">
        <div>Eieform</div>
        <div style={{ height: '16px' }} />
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={id} />
          <label className="form-check-label" htmlFor={id}>Særeie</label>
        </div>
      </div>
      <div className="col">
      </div>
    </div>
  );
};

export default Asset;
