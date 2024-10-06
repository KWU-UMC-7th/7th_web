import {useState} from 'react'

export default function Poster({id, coverImg, title}) {
    const [isHover, setIsHover] = useState(false)
    const onMouseEnter = () => {
        setIsHover(true)
    }
    const onMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <div className="poster" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={`https://image.tmdb.org/t/p/original/${coverImg}`} alt={title}/>
            {isHover && <div className="overlay"></div>}
        </div>
    )
}