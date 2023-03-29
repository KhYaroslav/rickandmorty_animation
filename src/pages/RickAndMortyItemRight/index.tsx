import { FC } from 'react'
import { IRickAndMorty } from '../../types/content';

const RickAndMortyItemRight: FC<IRickAndMorty> = ({ name, status, gender, episode, image, origin}) => {
  
  return (
  <>
    <div className="frame">
      <div className="frame__content text-left">
        <h3>{name}</h3>
        <p>This character {status}, has a gender {gender}, lives on the planet {origin.name} and appeared in {episode.length} episodes</p>
      </div>
    </div>

    <div className="frame frame_bg">
      <div className="frame__content">
        <div className="frame-media frame-media_right" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    </div>
        
    <div className="frame" />
  </>
  )
}

export default RickAndMortyItemRight;