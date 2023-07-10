import React, {useEffect} from 'react';
import MainTitle from "../../components/main-title";
import Header from "../../components/header";
import {useDispatch, useSelector} from "react-redux";
import MovieCard from "../../components/movie-card";
import {getPopularMovies} from "../../redux/action/movieAction";

const HomePage = () => {

    const upcoming_movies = useSelector(state => state.popular_movies)

    //
    // console.log(upcoming_movies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopularMovies())
    }, [dispatch])


    return (
        <section className={'home-page'}>
            <section className={'main-section'}>
                <Header header={'#000'}/>
                <MainTitle/>
            </section>
            <section>
                <div className="movies container">
                    <div className="row">
                        {
                            upcoming_movies?.map(movie => (
                                <div key={movie.id} className={'col-3'}>
                                    <div className="box">
                                        <MovieCard img={movie.poster_path} id={movie.id}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </section>
    );
};

export default HomePage;