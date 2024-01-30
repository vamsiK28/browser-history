import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteFunction} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDeleteIcon = () => {
    // console.log(1)
    deleteFunction(id)
  }

  // console.log(993)
  return (
    <li className="history-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="website-details">
        <div className="not-delete">
          <img className="history-item-logo" src={logoUrl} alt="domain logo" />
          <p className="history-item-name">{title}</p>
          <p href={domainUrl} className="hitory-item-url">
            {domainUrl}
          </p>
        </div>
        <button
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={onDeleteIcon}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
            style={{'pointer-events': 'all'}}
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem

/*
<img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-icon"
            alt="delete"
            style={{'pointer-events': 'all'}}
          />
          */
