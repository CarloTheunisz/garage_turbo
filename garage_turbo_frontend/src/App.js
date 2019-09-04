import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import API from './Library/API';
import Header from './Components/Header';
import Startpagina from './Components/Startpagina';
import Genereer from './Components/Genereer';
import Overzicht from './Components/Overzicht'

function App() {
  setInterval(() => {
    API.fetchData('http://localhost/garage_turbo/garage_turbo_backend/public/api/update/kilometerstand/all', 'PUT')
  }, 5000);

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={ Startpagina }/>
        <Route exact path="/genereer" component={ Genereer }/>
        <Route exact path="/overzicht" component={ Overzicht }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
