import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import RickAndMortyItemLeft from "../RickAndMortyItemLeft";
import RickAndMortyItemRight from "../RickAndMortyItemRight";
import Video from '../../media/rickandmorty.mp4'
import { IRickAndMorty } from "../../types/types";

const RickAndMortyList = () => {
  
  const { content } = useSelector((state: RootState) => state.rickAndMorty)
  
  window.onload = function () {
    let zSpacing = -1200,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName('frame'),
      frames = Array.from($frames),
      zVals: any = []
  
    window.onscroll = function () {

      let top = document.documentElement.scrollTop,
        delta = lastPos - top
    
      lastPos = top
    
      frames.forEach(function (n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
      })
    
    }
    window.scrollTo(0, 1)
  }

      
  return (
    <div className="container">
		<section className="gallery">

			<div className="frame">
				<div className="frame__content">
					<h2>Rick And Morty</h2>
				</div>
      </div>
        
      <div className="frame">
				<div className="frame__content">
					<div className="frame-media frame-media_left" style={{backgroundImage: `url(https://www.pravilamag.ru/upload/img_cache/652/65234820e716d5e5d0159ac9bccc8314_ce_1622x1080x148x0.jpg)`}}></div>
				</div>
			</div>

			<div className="frame frame_bg">
				<div className="frame__content">
					<video className="frame-media frame-media_right" src={Video} autoPlay loop muted></video>
				</div>
      </div>
        
			<div className="frame"/>
        {content.map((el, i) => i % 2 ? <RickAndMortyItemRight key={el.id} props={el} />
          : <RickAndMortyItemLeft key={el.id} props={el} />)}
      </section>
	</div>
  )
}

export default RickAndMortyList;
