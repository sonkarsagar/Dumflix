import { GPTSearchBar } from './GPTSearchBar';
import { GPTMovieSuggestions } from './GPTMovieSuggestions';
import { BG_IMG } from '../utils/constants';

export const GPTSearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img className='object-cover' src={BG_IMG} />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}
