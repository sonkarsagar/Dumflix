import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

export const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((state) => state.movie.trailerVideo);
  if (!trailerVideo) return null;
  return (
    <div className="w-full">
      <iframe className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
