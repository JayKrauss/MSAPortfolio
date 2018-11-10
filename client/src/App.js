import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home/home.js';
import BMHome from './components/BrewersMark/BMHome.js';
import BTOHome from './components/BeatTheOdds/BTOHome.js';
import BFMHome from './components/BrewsForMe/BFMHome.js';
import BCPHome from './components/BootCampProjects/BCPHome.js';


const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/brewersmark' component={BMHome} />
      <Route exact path='/beattheodds' component={BTOHome} />
      <Route exact path='/brewsforme' component={BFMHome} />
      <Route exact path='/bootcampprojects' component={BCPHome} />
    </Switch>
  </Router>
);
  

export default App;
