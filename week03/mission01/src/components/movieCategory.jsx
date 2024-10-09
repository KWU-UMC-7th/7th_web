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
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

export default CategoryButton;
