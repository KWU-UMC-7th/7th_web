import styled from "styled-components";
import img1 from '../img/pic1.jpg';
import img2 from '../img/pic2.jpg';
import img3 from '../img/pic3.jpg';
import img4 from '../img/pic4.jpg';
import { Link } from "react-router-dom";

const CategoryPage = () => {
    return (
        <Div>
            <Title>카테고리</Title>
            <Container>
                <Category to={'/movies/now-playing'} bgImage={img1}>
                    <p>현재 상영중인</p>
                </Category>
                <Category to={'/movies/popular'} bgImage={img2}>
                    <p>인기있는</p>
                </Category>
                <Category to={'/movies/top-rated'} bgImage={img3}>
                    <p>높은 평가를 받은</p>
                </Category>
                <Category to={'/movies/up-coming'} bgImage={img4}>
                    <p>개봉 예정중인</p>
                </Category>
            </Container>
        </Div>
    );
};

export default CategoryPage;

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin: 20px;
`;

const Container = styled.div`
    display: flex;
    margin-left: 50px;
`;

const Category = styled(Link)`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    width: 290px;
    height: 150px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-size: 15px;
    position: relative;

    p {
        position: relative;
        z-index: 1;
        margin: 0;
        padding: 5px 10px; /* 텍스트 주위에 여백 추가 */
        background-color: rgba(0, 0, 0, 0.6); /* 텍스트 배경에 어두운 오버레이 */
        border-radius: 5px; /* 텍스트 주위 둥근 모서리 */
    }

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: auto;
        height: auto;
        background-color: transparent; /* 가상 요소를 투명하게 처리 */
    }
`;