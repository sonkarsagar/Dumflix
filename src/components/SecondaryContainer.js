import { useSelector } from 'react-redux'
import { MovieList } from './MovieList'

export const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movie.nowPlayingMovies);
  if (!movies) return null;
  console.log(movies);

  return (
    <div className='bg-black'>
      <div className='-mt-55 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Trending"} movies={movies} />
        <MovieList title={"Horror"} movies={movies} />
      </div>
    </div>
  )
}
