import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';

export const useaddUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(state => state.movie.upcomingMovies)
    const getUpcomingMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const data = await res.json();
        dispatch(addUpcomingMovies(data.results));
    }
    useEffect(() => {
        if (!upcomingMovies) getUpcomingMovies();
    }, [upcomingMovies]);
}
