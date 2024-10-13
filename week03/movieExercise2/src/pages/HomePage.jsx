import styled from 'styled-components';

const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const HomePage = () => {
    return (
        <HomePageContainer>
            <h1>Welcome to MAENGCHA</h1>
        </HomePageContainer>
    );
};

export default HomePage;