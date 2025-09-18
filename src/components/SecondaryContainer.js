import { useSelector } from 'react-redux'
import { MovieList } from './MovieList'

export const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movie.nowPlayingMovies);
  const popular = useSelector((state) => state.movie.popularMovies);
  const topRated = useSelector((state) => state.movie.topRatedMovies);
  const upcoming = useSelector((state) => state.movie.upcomingMovies);

  if (!nowPlaying || !popular || !topRated || !upcoming) return null;

  return (
    <div className='bg-black'>
      <div className='-mt-50 relative z-20'>
        <MovieList title={"Now Playing"} movies={nowPlaying} />
        <MovieList title={"Popular"} movies={popular} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  )
}
