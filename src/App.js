import './App.css';
import Search from './components/SearchBox';
import Movielist from './components/moviesList';
import Filter from './components/filter';
import MovieDetails from './components/MovieDetails';
import { useSelector } from "react-redux";
import ThemeButton from './components/ThemeButton'


function App() {
  const { movieId,} = useSelector((state) => state.movies);   
  return (
    <div className="App">
       
      <div className="main_container">
         <div className='search_container'>
          <Search />
          <Filter />
         </div>
        <Movielist />
      </div>
      { movieId !=='' ? <MovieDetails /> : <div></div>}
      <ThemeButton />
    </div>
  );
 
}

export default App;
