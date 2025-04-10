import Header from './Header'
import usesNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'; 
import VideoTitle from './VideoTitle';
const Browse = () => {
 usesNowPlayingMovie();
  return (
    <div>
      
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      <VideoTitle/>
    </div>
  )
}

export default Browse;