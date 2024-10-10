import {useState} from 'react'
import styled from 'styled-components'

export default function Poster({id, coverImg, title, release_date}) {
    const [isHover, setIsHover] = useState(false)
    const onMouseEnter = () => {
        setIsHover(true)
    }
    const onMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <PosterDiv
        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Img src={`https://image.tmdb.org/t/p/original/${coverImg}`} alt={title}/>
            {isHover && <Overlay />}
            <Title>{title}</Title>
            <ReleaseDate>{release_date}</ReleaseDate>
        </PosterDiv>
    )
}

const PosterDiv = styled.div`
   width: 116px;
    justify-content: center;
    position: relative;
`;

const Title = styled.p`
    font-size: 13px;
    font-weight: 600;
    margin:0;
    `;
const ReleaseDate = styled.p`
    font-size: 11px;
    font-weight: 500;
    margin:0;
    `;

const Img = styled.img`
   width: 100%;
    object-fit: cover; /* 이미지 비율 유지하면서 부모 크기에 맞추기 */
    border-radius: 5px;
    `;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    ${PosterDiv}:hover & {
        opacity: 1;
    }
    `;