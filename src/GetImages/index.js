import './index.css'

const GetImages = props => {
  const {imageDetails, onClickThumbnail} = props
  const {id, thumbnailUrl} = imageDetails
  const thumbClicked = () => onClickThumbnail(id)
  return (
    <li>
      <button type="button" onClick={thumbClicked} className="button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}
export default GetImages
