import {useState} from 'react'
import styled from 'styled-components'

const Display = styled.div`
  position: relative;
  width: calc((100% / 9) - 20px); 
  margin: 10px; 
  aspect-ratio: 2 / 3;
`;

const Img = styled.img`
  width: 100%;
  height: 210px; 
  object-fit: cover;
  border-radius: 7px;
`;

const Background = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  align-items: flex-start;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px; 
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)}; 
  transition: opacity 0.2s ease; 
`;

const TitleContainer = styled.div`
  margin-top: 5px;
  color: white; 
  text-align: left;
`;

const MovieTitle = styled.h3`
  margin: 0;
  font-size: 15px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  text-align: left; 
`;

const MovieDate = styled.p`
  margin: 5px 0 0;
  font-size: 10px;
  text-align: center;
  text-align: left; 
`;

const M_Comp = ({ id, image, title, releaseDate }) => {
    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    
    return (
    <Display onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Img src={`https://image.tmdb.org/t/p/original/${image}`} alt={title} />
      <Background isHovered={isHovered} />
      <TitleContainer>
        <MovieTitle>{title}</MovieTitle>
        <MovieDate>{releaseDate}</MovieDate>
      </TitleContainer>
    </Display>
  );
};

export default M_Comp;