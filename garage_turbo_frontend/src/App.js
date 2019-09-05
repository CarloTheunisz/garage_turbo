import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import config from './Config/Config';
import API from './Library/API';
import Startpagina from './Components/Startpagina';
import Genereer from './Components/Genereer';
import Overzicht from './Components/Overzicht'

function App() {
  setInterval(() => {
    API.fetchData(config.baseUrl + config.updateKilometerstand, 'PUT')
  }, 5000);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Startpagina }/>
        <Route exact path="/genereer" component={ Genereer }/>
        <Route exact path="/overzicht" component={ Overzicht }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
