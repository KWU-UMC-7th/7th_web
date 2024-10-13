import { useState } from 'react';
import styled from 'styled-components';

export default function Card({ id, coverImg, title, date }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image src={`https://image.tmdb.org/t/p/original/${coverImg}`} alt={title} />
      {hovered && <HoverEffect />}
      <Text>{title}</Text>
      <ReleaseDate>{date}</ReleaseDate>
    </Container>
  );
}

const Container = styled.div`
    width: 116px;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
`;

const Text = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin: 0;
`;

const ReleaseDate = styled.p`
    font-size: 10px;
    margin: 0;
`;

const HoverEffect = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

  ${Container}:hover & {
    opacity: 1;
  }
`;