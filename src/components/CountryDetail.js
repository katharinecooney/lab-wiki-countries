import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const getCountryByCode = (cca3) => {
  let result = this.props.countryData.find( (oneCountry) => oneCountry.cca3 === cca3 );
  return result;
};

class Country extends React.Component {
  // I DON'T KNOW WHAT TO DO NOW
  render(){
    console.log(this.props);
    const cca3 = this.props.countryData.match.params.cca3;
    const countryInfo = getCountryByCode(cca3);
    
    return(
      <h1>{countryInfo.name.common}</h1>
    )
  }
}

export default Country;