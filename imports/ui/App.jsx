import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">Welcome to Meteor!</h1>
          <p className="lead text-muted">Testi PR</p>
        </div>
        <Hello/>
        <Info/>
      </div>
    </div>
  </div>
);
