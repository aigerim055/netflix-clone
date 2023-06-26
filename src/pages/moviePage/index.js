import React, { useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import {getMovieById, getMovieTrailerById} from "../../redux/action/movieAction";
import { CustomRating } from "../../components/rating";
import YoutubeBtn from "../../components/youtubeButton";

const MoviePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieById(params.id))
        dispatch(getMovieTrailerById(params.id))
    }, [dispatch])

    const movie = useSelector(state => state.movie)
    const youtube_link = useSelector(state => state.trailer)



    const params = useParams()
    return (
        <>

            <section
                className={'movie-page'}
            >
                <Header header={'header-color'} />
                <div className="movie-container">
                    <div
                        style={{
                            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
                            // backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            height: '600px',
                            // backgroundPosition: 'right'
                        }}
                        className={'movie-background'}
                    >
                        <div className="movie-title">
                            <h1>{movie.title}</h1>
                            <div className="movie-desc">
                                <p>{movie.runtime} min | </p>
                                <p>{movie.release_date?.slice(0, 4)}</p>
                                {
                                    movie.genres?.slice(0, 1).map((genre, idx) => (
                                        <p key={idx}> | {genre.name} </p>
                                    ))
                                }
                            </div>
                            {/*<p className={'movie-overview'}>{movie.overview}</p>*/}
                            <CustomRating rating={movie.vote_average} />
                            <Link target={'_blank'} to={`https://www.youtube.com/watch?v=${youtube_link}`}>
                                <YoutubeBtn/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MoviePage;