import Header from './Header'
import { useaddNowPlayingMovies } from '../hooks/useaddNowPlayingMovies';
import { useaddPopularMovies } from '../hooks/useaddPopularMovies';
import { useaddTopRatedMovies } from '../hooks/useaddTopRatedMovies';
import { useaddUpcomingMovies } from '../hooks/useUpcomingMovies';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';

const Browse = () => {
  useaddNowPlayingMovies();
  useaddPopularMovies();
  useaddTopRatedMovies();
  useaddUpcomingMovies();
  return (
    <div className=''>
      <div className="overflow-x-hidden hide-scrollbar absolute inset-0">
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  )
}

export default Browse