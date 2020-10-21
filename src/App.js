import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import pageTwo from './pageTwo';
import  Navigation from './Navigation'
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/pageTwo" component={pageTwo} />
    </BrowserRouter>
  );
}

export default App;
