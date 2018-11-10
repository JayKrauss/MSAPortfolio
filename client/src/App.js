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
import SMTCHome from './components/ShowMeTheCode/SMTCHome.js';
import ResumeHome from './components/Resume/ResumeHome.js';
import ContactMeHome from './components/ContactMe/ContactMeHome.js';
import CBInfoHome from './components/CBInfo/CBInfoHome.js';
import CBXPHome from './components/CBXP/CBXPHome.js';

let App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/brewersmark' component={BMHome} />
      <Route exact path='/beattheodds' component={BTOHome} />
      <Route exact path='/brewsforme' component={BFMHome} />
      <Route exact path='/bootcampprojects' component={BCPHome} />
      <Route exact path='/showmethecode' component={SMTCHome} />
      <Route exact path='/resume' component={ResumeHome} />
      <Route exact path='/contact' component={ContactMeHome} />
      <Route exact path='/bootcampinfo' component={CBInfoHome} />
      <Route exact path='/bootcampxp' component={CBXPHome} />
    </Switch>
  </Router>
);
  
export default App;
