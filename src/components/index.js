import './index.css'

const Components = props => {
  const {browserDetails, deleteBrowser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserDetails

  const onDelete = () => {
    deleteBrowser(id)
  }

  return (
    <li className="browser-card-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="browser_pic" alt="browser-pic" />
      <p className="title">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default Components
