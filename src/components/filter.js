
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { reset, setGenres } from '../features/movies/movieSlice';
const Filter=()=>{
    const genres =["Action", "Comedy", "Drama", "Fantasy", "Horror"];
    const [filter, setfilter] = useState("");
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const dispatch = useDispatch();

    const handleDropdown = ()=>{
         setDisplayDropdown(!displayDropdown);
    }

    useEffect(() => {
      if(filter !==""){
        dispatch(setGenres(filter));
      }
      return()=> {
        dispatch(reset)
      }
        
    }, [dispatch, filter]);
    
    return(
        <section>
        <div className="filter" onClick={handleDropdown}>
            <input type="text"
                   readOnly
                   placeholder="Filter by genres"
                   value={filter}
                   className="filter-input" />

                <i className="fa-solid fa-angle-down"></i>
        </div>
        {displayDropdown ? (
                <div className="Dropdown">
                    {genres.map((item, index)=>{
                     return(
                         <div key={index} className="Dropdown-item" onClick={()=>{setfilter(item);handleDropdown()}}>{item}</div>
                        );
                     })}
                </div>
            ) : null}
        </section>
       
    );

};

export default Filter;
