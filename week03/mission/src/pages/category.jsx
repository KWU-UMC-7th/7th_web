import styled from "styled-components";
import {Link} from "react-router-dom";

const CategoryPage = () => {
    return (
        <Div>
        <Title>카테고리</Title>
        <Container>
        <Category to={'/movies/now-playing'}>
        <p>현재 상영중인</p>
        </Category>
        <Category to={'/movies/popular'}>
        <p>인기있는</p>
        </Category>
        <Category to={'/movies/top-rated'}>
        <p>높은 평가를 받은</p>
        </Category>
        <Category to={'/movies/up-coming'}>
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
background-color: darkgray;
margin: 10px;
padding: 10px;
border-radius: 10px;
width: 240px;
height: 95px;
    font-weight: bold;
    color: white;
    text-decoration: none;
`;

