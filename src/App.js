import React from 'react';
import CountryInfo from './components/CountryInfo';
import CountryForm from './components/CountryForm';

import './App.css';


class App extends React.Component{
  state = {
    name: '',
    continent: '',
    capital: '',
    flag: '',
    language: '',
    currency: '',
    error: null
  }


  getCountry = async e => {
    e.preventDefault();
    const { country } = e.target.elements
    const countryValue = country.value;


    if(countryValue){
      const API_URL = `https://restcountries.eu/rest/v2/name/${countryValue}?fullText=true`;
      const response = await fetch(API_URL);
      const data = await response.json();


      this.setState({
        name: data[0].name,
        continent: data[0].subregion,
        capital: data[0].capital,
        flag: data[0].flag,
        language: data[0].languages[0].name,
        currency: data[0].currencies[0].name,
        error:null
      });
      }else{
        this.setState({
        error: 'Please Enter a Country'
      })
    }
  }

    render(){
      return(
        <div className="container p-4">
          <div className="row">
            <div className="col-md-12 mx-auto">
              <CountryForm getCountry={this.getCountry} />
              <CountryInfo {...this.state}/>
            </div>
          </div>
        </div>
      )
    }
}

export default App;
