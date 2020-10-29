import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import  NightMare from './games/NightMare'
import  WitchSaga from './games/WitchSaga'
import  Navigation from './Navigation'
import './App.scss';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/nightMare" component={NightMare} />
      <Route path="/witchSaga" component={WitchSaga} />
    </BrowserRouter>
  );
}

export default App;
