import { useSelector } from "react-redux";

function MovieDetails() {
    const { movieData } = useSelector((state) => state.movies);  
    // console.log(data);

    // useEffect(()=>{
    //     // if(data !=''){
    //     //     dispatch(setMovieId(data));
    //     // }
    //     if(movieId){
    //         dispatch(searchMovieDetail(movieId));
    //     }

    //  },[dispatch, movieId]);
    return (
            <div className="profile"><img src={movieData.banner} alt={movieData.title} />
                        <h3>Name:  {movieData.title}</h3>
                        <p>Rating:  {movieData.rating}</p>
                        <p>year:  {movieData.year}</p>
                        </div>
    );
    
}


export default MovieDetails;