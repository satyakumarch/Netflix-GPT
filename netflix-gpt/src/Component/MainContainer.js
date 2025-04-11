// import { useSelector } from 'react-redux';
// import VideoTittle from './VideoTitle';
// import VideoBackground from './VideoBackground';


// const MainContainer = () => {

//     const movies = useSelector((store) => store.movies?.nowPlayingMovies);
//     if (!movies) return;
//     console.log("hello");

//     const mainMovie = movies[2];
//     console.log("main movie",mainMovie);

//     const { original_title, overview } = mainMovie;
//             return (
//         <div>
//                 <VideoTittle title={original_title} overView={overview} />
//             <VideoBackground />
//         </div>
//     )
// }

// export default MainContainer

import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  // Don't render anything if movies aren't loaded yet
  if (!movies || movies.length === 0) return null;
  
  const mainMovie = movies[0];
  console.log(mainMovie);
  
  const { original_title, overview, id } = mainMovie;
  
  return (
    <div>
      {/* <VideoTitle title={original_title} overView={overview} /> */}
      <VideoTitle original_title={original_title} overView={overview} />
      <VideoBackground id={id}/>
    </div>
  );
}

export default MainContainer;