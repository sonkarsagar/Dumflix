import { IMF_CDN_URL } from '../utils/constants';

export const MovieCard = ({ card }) => {
  console.log(card);

  return (
    <div className='w-45 pr-2'>
      <img className='rounded-sm' src={IMF_CDN_URL + card.poster_path} alt='Movie Card' />
    </div>
  )
}
