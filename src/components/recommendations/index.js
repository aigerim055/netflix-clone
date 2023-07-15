import React from 'react';
import './rec.css'
import {useSelector} from "react-redux";
import MovieCard from "../movie-card";



const Recommendations = () => {

    const data = useSelector(state => state.recommendations).slice(0, 5)
    return (
        <div>
            {
                data.length === 0 ? <p></p> :
                    <div>
                        <h5 className={'subtitle'}>More Like This</h5>
                        <div className="rec">
                            {
                                data?.map((el) => (
                                    <MovieCard  img={el.poster_path} id={el.id}/>
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Recommendations;