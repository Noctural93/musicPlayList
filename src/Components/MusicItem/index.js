import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicItem = props => {
  const {songDetails, onDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = songDetails

  const deleteSong = () => {
    onDeleteSong(id)
  }

  return (
    <li className="song-container">
      <div className="song-details-card">
        <img src={imageUrl} alt="track" className="song-image" />
        <div className="name-genre-container">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="song-duration-delete-card">
        <p className="duration">{duration}</p>
        <AiOutlineDelete
          size={23}
          className="delete-icon"
          onClick={deleteSong}
          data-testid="delete"
        />
      </div>
    </li>
  )
}

export default MusicItem
