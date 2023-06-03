import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive && 'active-tab-btn'
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
