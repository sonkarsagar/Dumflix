import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

export const useMovieTrailer = (movieId) => {
    const trailerVideo=useSelector(state=>state.movie.trailerVideo)
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
            API_OPTIONS
        );
        const data = await res.json();

        const filterData = data.results.filter((vid) => vid.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        if(!trailerVideo) getMovieVideo();
    }, [trailerVideo]);
}

