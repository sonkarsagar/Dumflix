import { useSelector } from 'react-redux'
import { MovieList } from './MovieList'

export const GPTMovieSuggestions = () => {
  const { gptMovies, gptMoviesResults } = useSelector(store => store.gpt)
  if (!gptMovies) return null;
  
  return (
    <div className='p-3 m-5 mt-0 bg-black/75 text-white'>
      <div>
        {gptMovies.map((movie, index) => {          
          return <MovieList key={movie}
            title={movie}
            movies={gptMoviesResults[index]} />
        })}
      </div>
    </div>
  )
}
