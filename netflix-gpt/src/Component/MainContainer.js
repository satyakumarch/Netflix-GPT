import { useSelector } from 'react-redux';
import VideoTittle from './VideoTitle';
import VideoBackground from './VideoBackground';


const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[2];
    console.log("main movie",mainMovie);

    const { original_title, overview } = mainMovie;
            return (
        <div>
                <VideoTittle title={original_title} overView={overview} />
            <VideoBackground />
        </div>
    )
}

export default MainContainer