import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

export const useaddPopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(state => state.movie.popularMovies)
    const getPopularMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS);
        const data = await res.json();
        dispatch(addPopularMovies(data.results));
    }
    useEffect(() => {
        if (!popularMovies) getPopularMovies();
    }, [popularMovies]);
}
