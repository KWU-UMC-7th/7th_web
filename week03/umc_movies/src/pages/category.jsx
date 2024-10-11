import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate를 임포트합니다.
import * as S from '../components/styles';

const Category = () => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.

    const items = [
        { img: 'https://cdn.pixabay.com/photo/2020/06/26/21/36/sunset-5344024_1280.jpg', category: '현재 상영중인', path: '/movies/now-playing' },
        { img: 'https://cdn.pixabay.com/photo/2016/01/29/11/56/photos-1167847_1280.jpg', category: '인기있는', path: '/movies/popular' },
        { img: 'https://cdn.pixabay.com/photo/2023/01/05/13/32/retro-film-7698942_1280.jpg', category: '높은 평가를 받은', path: '/movies/top-rated' },
        { img: 'https://cdn.pixabay.com/photo/2020/06/29/17/26/photographer-5353515_1280.jpg', category: '개봉 예정중인', path: '/movies/upcoming' },
    ];

    const handleCardClick = (path) => {
        navigate(path); // 클릭한 카드에 맞는 경로로 이동합니다.
    };

    return (
        <div>
            <h1>카테고리</h1>
            <S.ImageContainer>
                {items.map((item, index) => (
                    <S.ImageCard key={index} onClick={() => handleCardClick(item.path)}> {/* 클릭 이벤트 추가 */}
                        <S.Image src={item.img} alt={`카테고리 ${item.category}`} />
                        <S.CategoryLabel>{item.category}</S.CategoryLabel>
                    </S.ImageCard>
                ))}
            </S.ImageContainer>
        </div>
    );
};

export default Category;
