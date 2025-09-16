import { VideoBackground } from './VideoBackground';
import { VideoTitle } from './VideoTitle';
import { useSelector } from 'react-redux';

export const MainContainer = () => {
    const movie = useSelector((state) => state.movie.nowPlayingMovies); // re-renders if data changes (i.e. when api call is made and data is fetched)
    if (!movie) return null;
    const mainMovies = movie[0];
    const { title, overview, id } = mainMovies;
    return (
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}
