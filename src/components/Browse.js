import Header from './Header'
import { useaddNowPlayingMovies } from '../hooks/useaddNowPlayingMovies';
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';

const Browse = () => {
  useaddNowPlayingMovies();
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