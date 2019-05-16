import React from 'react';
import {Link} from 'react-router-dom';
import countryData from '../data/countries.json';

class CountryList extends React.Component {
  state = {
    countryData: countryData
  }
  render() {
    return(
      <div class="col-5">
            <div class="list-group" style={{overflow: "scroll", maxHeight: "100vh"}}>
          {
            this.state.countryData.map((country, i) => {
              return(
                <div>
                  <Link key={i} to={`/country/${country.cca3}`} className="list-group-item list-group-item-action"> <p>{country.flag}</p> {country.name.common} </Link>
                </div>
              )
            })
          }
          </div>
      </div>
    )
  }
}

export default CountryList;