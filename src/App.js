import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import NightMare from './games/NightMare'
import WitchSaga from './games/WitchSaga'
import MinerSaur from './games/MinerSaur'
import ShieldGhost from './games/ShieldGhost'
import Savior from './games/Savior'
import StarHeros from './games/StarHeros'
import ArtBusters from './games/ArtBusters'
import Oasis from './games/Oasis'
import CoreBallRush from './games/CoreBallRush'
import FirePlace from './games/FirePlace'
import PhantomThief from './games/PhantomThief'
import Navigation from './Navigation'
import Footer from './Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/NightMare" component={NightMare} />
      <Route path="/witchSaga" component={WitchSaga} />
      <Route path="/MinerSaur" component={MinerSaur} />
      <Route path="/ShieldGhost" component={ShieldGhost} />
      <Route path="/Savior" component={Savior} />
      <Route path="/StarHeros" component={StarHeros} />
      <Route path="/ArtBusters" component={ArtBusters} />
      <Route path="/Oasis" component={Oasis} />
      <Route path="/CoreBallRush" component={CoreBallRush} />
      <Route path="/FirePlace" component={FirePlace} />
      <Route path="/PhantomThief" component={PhantomThief} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
