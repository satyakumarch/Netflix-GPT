import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const usesNowPlayingMovie = () => {
  
    const dispatch =useDispatch();

    const getNowPlayingMovie = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTION);
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=> {
      getNowPlayingMovie();
    },[]);
    
}
export default usesNowPlayingMovie;

