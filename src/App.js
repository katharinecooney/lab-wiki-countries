import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetail from './components/CountryDetail';
import CountryList from './components/CountryList';
import countryData from './data/countries.json';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <CountryList />
            <Route exact path="/country/:cca3" component={CountryDetail} countryData={countryData}/>
            
          </Switch>
        </Router>
        

      </div>
    );
  }
}

export default App;
