// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, onclick} = props
  const {suggestion} = suggestionsList
  const onchangeinput = () => {
    onclick(suggestion)
  }
  return (
    <li className="list-style">
      <div className="container">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="img"
          alt="arrow"
          onClick={onchangeinput}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
