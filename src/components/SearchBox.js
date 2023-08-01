import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/movies/movieSlice';

function Search() {
    const dispatch = useDispatch();
    const {searchTerm} = useSelector((state) => state.movies); 

   const handleInputValueChange =(e)=>{
        dispatch(setSearchTerm(e.target.value.toLowerCase()))
   }

    return (
        <div>
            <input type="text" placeholder="search..." className="search" value={searchTerm} onChange={handleInputValueChange} />
        </div>
    );
};

export default Search;
