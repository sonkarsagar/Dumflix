import { useSelector } from 'react-redux';
import {lang} from '../utils/language';

export const GPTSearchBar = () => {
    const langKey=useSelector((state)=>state.config.lang)
    
    return (
        
        <div className='pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className='m-4 w-1/2 bg-black grid grid-cols-12 rounded-lg'>
                <input
                    type="text"
                    className='p-4 m-4 bg-white col-span-9 rounded-lg'
                    placeholder={lang[langKey].GPTSearchPlaceholder}
                />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer'>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}
