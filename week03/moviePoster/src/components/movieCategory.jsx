import styled from "styled-components";

const CategoryButton = ({ text, imageUrl }) => {
  return (
    <ButtonContainer>
      <img src={imageUrl} alt={text} />
      <Overlay>
        <span>{text}</span>
      </Overlay>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: relative;
  width: 20vw;
  height: 120px;
  border-radius: 20px; 
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease; 

  &:hover {
    transform: scale(1.05); 
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5); 
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease; 

  ${ButtonContainer}:hover & {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export default CategoryButton;
