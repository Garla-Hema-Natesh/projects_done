import './index.css'

const TabItem = props => {
  const {tabDetails, displaythesameId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickedButton = () => {
    displaythesameId(tabId)
  }
  const className = isActive ? 'active-tab-btn ' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${className}`}
        onClick={onClickedButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
