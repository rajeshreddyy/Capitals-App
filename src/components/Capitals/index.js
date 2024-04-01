import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onChangeCity = event => {
    const countryId = event.target.value
    countryAndCapitalsList.map(eachCountry => {
      if (countryId === eachCountry.id) {
        this.setState({country: eachCountry.country})
      }
      return eachCountry
    })
  }

  render() {
    const {country} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            onChange={this.onChangeCity}
            name="Countries"
            id="Countries"
            className="countries-dropdown"
          >
            {countryAndCapitalsList.map(eachCountry => (
              <option key={eachCountry.id} value={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <label htmlFor="Countries"> is capital of which country?</label>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
