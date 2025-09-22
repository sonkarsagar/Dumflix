import { IMF_CDN_URL } from '../utils/constants';

export const MovieCard = ({ card }) => {
  if (!card.poster_path) return null;
  return (
    <div className="relative w-45 pr-1">
      <div className="absolute cursor-pointer inset-0 hover:bg-gradient-to-b hover:from-black/50"></div>
      <img className="rounded-sm" src={IMF_CDN_URL + card.poster_path} alt='Movie Card' />
    </div>
  )
}
