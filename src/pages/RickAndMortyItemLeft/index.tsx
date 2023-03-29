import { FC } from 'react'
import { IRickAndMortyProps } from '../../types/content' 

const RickAndMortyItemLeft: FC<IRickAndMortyProps> = ({ props }) => {
	
	return (
	<>
		<div className="frame">
			<div className="frame__content text-right">
				<h3>{props.name}</h3>
				<p>This character {props.status}, has a gender {props.gender}, lives on the planet {props.origin.name} and appeared in {props.episode.length} episodes</p>
			</div>
		</div>

		<div className="frame">
			<div className="frame__content">
					<div className="frame-media frame-media_left" style={{backgroundImage: `url(${props.image})`}}></div>
			</div>
		</div>
			
		<div className="frame"/>
	</>
	)
}

export default RickAndMortyItemLeft
