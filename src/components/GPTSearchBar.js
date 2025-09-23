import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../utils/language';
import { useRef } from 'react';
import { addGPTMovies } from '../utils/gptslice';
import { useSearchMovie } from '../hooks/useSearchMovie'

export const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((state) => state.config.lang)
    const searchText = useRef(null)
    const handleGPTSearchClick = async () => {
        console.log(searchText.current.value);

        // OpenAI API custom hook
        let gptResults = {};
        gptResults.choices = 'Andaz Apna Apna, Chupke Chupke, Gol Maal, Hera Pheri, Padosan'
        // API Call finished

        const gptMovies = gptResults.choices?.split(", ")

        const data = gptMovies.map(movie => useSearchMovie(movie))

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
