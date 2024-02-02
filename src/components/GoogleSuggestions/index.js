// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {input: '', placeHolder: 'Search Google'}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onclick = suggestion => {
    this.setState({input: suggestion, placeHolder: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {input, placeHolder} = this.state
    const searchResults = suggestionsList.filter(eachitem =>
      eachitem.suggestion.toLowerCase().includes(input.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            className="search-input"
            placeholder={placeHolder}
            value={input}
            onChange={this.onChangeInput}
          />

          <ul>
            {searchResults.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionsList={eachItem}
                onclick={this.onclick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
