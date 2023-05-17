import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useLayoutEffect} from 'react'
import RickAndMortyItemLeft from "../RickAndMortyItemLeft";
import RickAndMortyItemRight from "../RickAndMortyItemRight";
import Video from '../../media/rickandmorty.mp4'
import { fetchingRickAndMorty } from "../../redux/actions/rickAndMortyActions";
import image from '../../assets/image/rickAndMorty.jpg'

const RickAndMortyList = () => {
  const { content } = useSelector((state: RootState) => state.rickAndMorty)

  const dispatch = useDispatch<AppDispatch>()
  
  useEffect(() => {
    dispatch(fetchingRickAndMorty())
  }, [dispatch])
  
  useLayoutEffect(() => {
    let zSpacing = -1200,
      lastPos = zSpacing / 5,
      frames = [...document.querySelectorAll('.frame')],
      zVals: number[] = [],
      isScrolled = false
  
    const handleScroll = () => {
      let top = document.documentElement.scrollTop,
        delta = lastPos - top
  
      lastPos = top
  
      frames.forEach((n, i) => {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
      })
  
    }
    window.addEventListener('scroll', handleScroll)

    if (!isScrolled) {
      window.scrollBy(0, 10)
      isScrolled = true
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [content])

  const depthValue = `${+content.length * 745}px`;
  document.documentElement.style.setProperty('--depth', depthValue);
  
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
					<div className="frame-media frame-media_left" style={{backgroundImage: `url(${image})`}}></div>
				</div>
			</div>

			<div className="frame frame_bg">
				<div className="frame__content">
					<video className="frame-media frame-media_right" src={Video} autoPlay loop muted></video>
				</div>
      </div>
        
			<div className="frame"/>
        {content.map((el, i) => i % 2 ? <RickAndMortyItemRight key={el.id} {...el} />
          : <RickAndMortyItemLeft key={el.id} {...el} />)}

			<div className="frame">
				<div className="frame__contents">© Khristoforov Yaroslav</div>
      </div>
    </section>
	</div>
  )
}

export default RickAndMortyList;
