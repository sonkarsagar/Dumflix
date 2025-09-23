import { API_OPTIONS } from '../utils/constants';

export const useSearchMovie = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=%20' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json = await data.json()
    return json.results
}
