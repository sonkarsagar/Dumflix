import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

export const useaddTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const data = await res.json();
        dispatch(addTopRatedMovies(data.results));
    }
    useEffect(() => {
        getTopRatedMovies();
    }, []);
}
