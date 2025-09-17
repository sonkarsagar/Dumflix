import { MovieCard } from './MovieCard'

export const MovieList = ({ title, movies }) => {
    return (
        <div className='px-10 w-screen'>
            <h1 className='text-lg pt-6 font-bold text-white'>{title}</h1>
            <div className='flex overflow-x-scroll hide-scrollbar w-screen'>
                <div className='flex'>
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} card={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}
