import { useEffect} from "react";
import { OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const TrailerVideo=useSelector((store)=>store.movies?.TrailerVideo);
  const dispatch=useDispatch();



  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/950387/videos?language=en-US', OPTION);


    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const Trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(Trailer);
    // setTrailerId(Trailer.key);
    dispatch(addTrailerVideo(Trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  return(
  <div>
    <iframe width="560" height="315"
      // src="https://www.youtube.com/embed/ZNKX2vGRPMA?si=iSpETw-iTVqLiwQU"
      src={"https://www.youtube.com/embed/"+TrailerVideo.key}

      title="YouTube video player"
       frameborder="0" 
       allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

    </iframe>
  </div>
)}
export default VideoBackground;