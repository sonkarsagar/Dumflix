import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../utils/language';
import { useRef } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovies } from '../utils/gptslice';

export const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((state) => state.config.lang)
    const searchText = useRef(null)
    const searchMovieTMDB = async (movie) => {

        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=%20' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = await data.json()
        return json.results
    }
    const handleGPTSearchClick = async () => {
        console.log(searchText.current.value);

        // OpenAI API call
        let gptResults = {};
        gptResults.choices = 'Andaz Apna Apna, Chupke Chupke, Gol Maal, Hera Pheri, Padosan'
        // API Call finished

        const gptMovies = gptResults.choices?.split(", ")

        const data = gptMovies.map(movie => searchMovieTMDB(movie))

        const tmdbResults = await Promise.all(data)

        dispatch(addGPTMovies({ gptMovies, tmdbResults }))
    }
    return (
        
        <div className='pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className='m-4 mt-0 w-1/2 bg-black grid grid-cols-12 rounded-lg'>
                <input
                    ref={searchText}
                    type="text"
                    className='p-4 m-4 bg-white col-span-9 rounded-lg'
                    placeholder={lang[langKey].GPTSearchPlaceholder}
                />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer' onClick={handleGPTSearchClick}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}
