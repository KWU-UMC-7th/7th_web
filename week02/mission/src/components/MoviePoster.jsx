import '../App.css'


const MoviePoster = ({ key,poster_path}) => {
    return (
      <div >
        <img src= {`https://image.tmdb.org/t/p/w200/${poster_path}`} key={key}
        style={{borderRadius:"15px"}}/>
      </div>
    );
  }
  
  export default MoviePoster;