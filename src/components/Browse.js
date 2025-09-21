import Header from './Header'
import { useaddNowPlayingMovies } from '../hooks/useaddNowPlayingMovies';
import { useaddPopularMovies } from '../hooks/useaddPopularMovies';
import { useaddTopRatedMovies } from '../hooks/useaddTopRatedMovies';
import { useaddUpcomingMovies } from '../hooks/useUpcomingMovies';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
import { useSelector } from 'react-redux';
import { GPTSearch } from './GPTSearch';

const Browse = () => {
  useaddNowPlayingMovies();
  useaddPopularMovies();
  useaddTopRatedMovies();
  useaddUpcomingMovies();
  const gptState = useSelector((state) => state.gpt);
  return (
    <div className=''>
      <div className="overflow-x-hidden hide-scrollbar absolute inset-0">
        <Header />
        {gptState.gptToggle ?
          <GPTSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        }
      </div>
    </div>
  )
}

export default Browse