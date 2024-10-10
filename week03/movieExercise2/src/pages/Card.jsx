import {useState} from 'react'
import styled from 'styled-components'

export default function Card({id, coverImg, title, date}) {
    const [isHover, setIsHover] = useState(false)
    const onMouseEnter = () => {
        setIsHover(true)
    }
    const onMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <CardDiv onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Img src={`https://image.tmdb.org/t/p/original/${coverImg}`} alt={title}/>
            {isHover && <Overlay />}
            <Title>{title}</Title>
            <Date>{date}</Date>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    width: 116px;
    justify-content: center;
    position: relative;
`;

const Title = styled.p`
    font-size: 13px;
    font-weight: 600;
    margin:0;
    `;
const Date = styled.p`
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
    ${CardDiv}:hover & {
        opacity: 1;
    }
    `;