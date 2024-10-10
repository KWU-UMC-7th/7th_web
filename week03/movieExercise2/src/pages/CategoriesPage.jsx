import { Link } from 'react-router-dom'; // Link 컴포넌트 추가
import styled from 'styled-components';
import presentImg from '../categoryImg/present.jpg';
import popularImg from '../categoryImg/famous.jpg';
import topratedImg from '../categoryImg/highrated.jpg';
import upcomingImg from '../categoryImg/commingsoon.jpg';



const CategoriesPage = () => {
    return (
        <MoviesContainer>
            <CategoryTitle>카테고리</CategoryTitle> {/* 카테고리 제목 추가 */}
            <CategoriesWrapper>
                {/* 현재 상영중인 카테고리 */}
                <Link to="/movies/now-playing">  {/* 클릭 시 /movies/now-playing로 이동 */}
                    <CategoryContainer>
                        <CategoryImage src={presentImg} alt="현재 상영중인" />
                        <CategoryLabel>현재 상영중인</CategoryLabel>
                    </CategoryContainer>
                </Link>
                
                {/* 인기있는 카테고리 */}
                <Link to="/movies/popular">  {/* 클릭 시 /movies/popular로 이동 */}
                    <CategoryContainer>
                        <CategoryImage src={popularImg} alt="인기있는" />
                        <CategoryLabel>인기있는</CategoryLabel>
                    </CategoryContainer>
                </Link>
                
                {/* 높은 평가를 받은 카테고리 */}
                <Link to="/movies/top-rated">  {/* 클릭 시 /movies/high-rated로 이동 */}
                    <CategoryContainer>
                        <CategoryImage src={topratedImg} alt="높은 평가를 받은" />
                        <CategoryLabel>높은 평가를 받은</CategoryLabel>
                    </CategoryContainer>
                </Link>
                
                {/* 개봉 예정중인 카테고리 */}
                <Link to="/movies/up-coming">  {/* 클릭 시 /movies/up-coming으로 이동 */}
                    <CategoryContainer>
                        <CategoryImage src={upcomingImg} alt="개봉 예정중인" />
                        <CategoryLabel>개봉 예정중인</CategoryLabel>
                    </CategoryContainer>
                </Link>
            </CategoriesWrapper>
        </MoviesContainer>
    );
};

export default CategoriesPage;

const MoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const CategoryTitle = styled.h2`
    margin-bottom: 20px;
`;

const CategoriesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const CategoryContainer = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.01);
    }
`;

const CategoryImage = styled.img`
    width: 100%;
    height: 100%;
        object-fit: cover;
`;

const CategoryLabel = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 1.2rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 5px;
`;

