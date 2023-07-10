import React from 'react';
import './rec.css'
import {useSelector} from "react-redux";
import MovieCard from "../movie-card";
import {Link} from "react-router-dom";


const Recommendations = () => {

    const data = useSelector(state => state.recommendations).slice(0, 5)

    return (
        <div>
            <h5 className={'subtitle'}>More Like This</h5>
            <div className="rec">
                {
                    data?.map((el) => (
                        // <RecommendationCard data={el}/>
                        // <Link to={`/movie/${el.id}`}>
                        //     <MovieCard  img={el.poster_path} id={el.id}/>
                        // </Link>
                        <MovieCard  img={el.poster_path} id={el.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Recommendations;