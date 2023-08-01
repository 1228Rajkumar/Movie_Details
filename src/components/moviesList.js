import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { popularMovies, searchByGenre } from "../features/movies/moviesAction";
import { searchMovieDetail } from "../features/movies/moviesAction";
import { setMovieId } from "../features/movies/movieSlice";


function Movielist() {

    const { allMoviesData, genres, searchTerm, movieId,} = useSelector((state) => state.movies);   
    const dispatch = useDispatch();
    const [movieImdbId, setMovieImdbId] = useState('');
    
    useEffect(()=>{
        dispatch(popularMovies());
        
        if(genres){
            dispatch(searchByGenre(genres));
        }

        if(movieImdbId !==''){
            dispatch(setMovieId(movieImdbId));
        }
        if(movieId !==''){
            console.log(movieId)
            dispatch(searchMovieDetail(movieId));
        }
     },[dispatch, genres, movieImdbId, movieId]);

     const data = allMoviesData.filter((item)=> item.title.toLowerCase().includes(searchTerm));

    return (
        <div className="list">
            {data.length < 0 ? <h1>Loding...</h1>:data.map((item) =>{
            return(
                 <div key={item.imdb_id} id={item.imdb_id} className="listitem" onClick={(e) => {setMovieImdbId(e.target.id) }} >{item.title}</div>
                //  onMouseEnter={(e) => {setMovieImdbId(e.target.id) }} onMouseLeave={() => {setMovieImdbId(null) }}
                 );
            })}
        </div>
        
    );
};

export default Movielist;