import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

export const useaddNowPlayingMovies = () => {
    const nowPlayingMovies = useSelector(state => state.movie.nowPlayingMovies)

    const dispatch = useDispatch();
    const getNowPlayinMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS);
        const data = await res.json();
        dispatch(addNowPlayingMovies(data.results));
    }
    useEffect(() => {
        if (!nowPlayingMovies) getNowPlayinMovies();
    }, [nowPlayingMovies]);

}
