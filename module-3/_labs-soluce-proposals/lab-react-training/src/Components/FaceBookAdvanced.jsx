import React, { Component } from 'react';
import data from '../data/berlin.json';
import '../styles/FaceBook.css';

class FaceBookAdvanced extends Component {
  state = {
    selectedCountry: null,
  };

  handleCountrySelect = (country) => {
    this.setState({ selectedCountry: country });
  };

  render() {
    const countryList = [...new Set(data.map((student) => student.country))];

    return (
      <div className="FaceBook">
        <button
          style={{
            backgroundColor:
              this.state.selectedCountry === null ? 'dodgerblue' : 'white',
          }}
          className="FaceBook__button"
          onClick={(event) => this.handleCountrySelect(null)}
        >
          All
        </button>
        {countryList.map((country, index) => (
          <button
            key={index}
            className="FaceBook__button"
            style={{
              backgroundColor:
                this.state.selectedCountry === country ? 'dodgerblue' : 'white',
            }}
            onClick={(event) => this.handleCountrySelect(country)}
          >
            {country}
          </button>
        ))}

        <div>
          {data.map((student, index) => (
            <div
              key={index}
              style={{
                backgroundColor:
                  this.state.selectedCountry === student.country
                    ? 'dodgerblue'
                    : 'white',
              }}
              className="FaceBook__profile"
            >
              <img src={student.img} alt={student.firstName} />
              <div>
                <p>First name: {student.firstName}</p>
                <p>Last name: {student.lastname}</p>
                <p>Country: {student.country}</p>
                <p>Type: {student.isStudent ? 'Student' : 'Teacher'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FaceBookAdvanced;
