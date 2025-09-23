import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

export const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((state) => state.movie.trailerVideo);
  if (!trailerVideo) return null;
  const videoId = trailerVideo.key;
  return (
    <div className="aspect-video">
      <iframe className="aspect-video"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen >
      </iframe>
    </div>
  );
};
