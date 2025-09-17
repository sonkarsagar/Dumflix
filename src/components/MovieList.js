import { MovieCard } from './MovieCard'

export const MovieList = ({ title, movies }) => {
    console.log(movies);

    return (
        <div className='px-10 w-screen'>
            <h1 className='text-xl py-2 font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll hide-scrollbar'>
                <div className='flex'>
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} card={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}
