import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class HistoryPage extends Component {
  // state = {currentList: []}
  constructor(props) {
    super(props)
    const {historyList} = props
    this.state = {currentList: historyList, currentSearchInput: ''}
  }

  deleteFunction = id => {
    // console.log(23)
    const {currentList} = this.state
    const newList = currentList.filter(i => i.id !== id)
    this.setState(prevState => ({
      currentList: newList,
      currentSearchInput: prevState.currentSearchInput,
    }))
  }

  searchUpdate = event => {
    this.setState(prevState => ({
      currentList: prevState.currentList,
      currentSearchInput: event.target.value,
    }))
  }

  render() {
    // console.log(this.state)
    const {currentList, currentSearchInput} = this.state
    // console.log(1111)
    //  console.log(currentList)
    let n
    const noResult = (
      <div className="none-box">
        <p className="no-results">There is no history to show</p>
      </div>
    )
    const filteredList = currentList.filter(i => {
      const {title} = i
      return title.toLowerCase().includes(currentSearchInput.toLowerCase())
    })
    // console.log(filteredList)
    // console.log(filteredList)
    if (filteredList.length === 0) {
      n = noResult
      // console.log(1)
    } else {
      // console.log(3)
      const result = (
        <ul className="history-results-container">
          {filteredList.map(i => (
            <HistoryItem
              historyItem={i}
              deleteFunction={this.deleteFunction}
              key={i.id}
            />
          ))}
        </ul>
      )
      n = result
    }

    return (
      <div className="history-page">
        <div className="search-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-bar-box">
            <div className="inner-outer-box">
              <div className="search-icon-box">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <div className="search-input-box">
                <input
                  type="search"
                  className="input-element"
                  value={currentSearchInput}
                  onChange={this.searchUpdate}
                  placeholder="Search History"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search-history-display">{n}</div>
      </div>
    )
  }
}

export default HistoryPage
