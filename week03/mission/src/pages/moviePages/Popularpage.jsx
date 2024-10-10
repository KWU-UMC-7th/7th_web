import styled from 'styled-components'
import MoviePage from '../../components/Moviepage'
const Conatiner = styled.div`
width:100vw;
height:100vh;
background-color:black;
color:white;
padding:20px;
`

const PopularPage = () => {
  return (
    <>
      <MoviePage category={'popular'} />
    </>
  )
}
export default PopularPage;