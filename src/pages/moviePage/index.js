import React, { useEffect } from 'react';
import {Link, useParams} from "react-router-dom";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import {
    getMovieById,
    getMovieTrailerById,
    getRecommendationsForMovie,
    getReviewsForMovie
} from "../../redux/action/movieAction";
import { CustomRating } from "../../components/rating";
import YoutubeBtn from "../../components/youtubeButton";
import Recommendations from "../../components/recommendations";

const MoviePage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        dispatch(getMovieById(params.id))
        dispatch(getMovieTrailerById(params.id))
        dispatch(getReviewsForMovie(params.id))
        dispatch(getRecommendationsForMovie(params.id))
    }, [params.id])

    const movie = useSelector(state => state.movie)
    const youtube_link = useSelector(state => state.trailer)
    const rec = useSelector(state => state.recommendations)

    // const filter_logo = movie?.production_companies?.filter(el =>  el.logo_path )
    // console.log(filter_logo)





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
                            height: '550px',
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
                            <CustomRating rating={movie.vote_average} />
                            <div className="movie-desc-company">
                                {/*<img  src={`https://image.tmdb.org/t/p/original${filter_logo[0]?.logo_path}`} alt=""/>*/}
                                <Link target={'_blank'} to={`https://www.youtube.com/watch?v=${youtube_link}`}>
                                    <YoutubeBtn/>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <section>
                    <div className="container">
                        <Recommendations/>
                    </div>
                </section>
            </section>
        </>
    );
};

export default MoviePage;