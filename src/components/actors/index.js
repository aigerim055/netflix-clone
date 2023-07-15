import React from 'react';
import './actors.css'
import {useSelector} from "react-redux";

const Actors = () => {

    const actors = useSelector(state => state.actors)

    return (
        <div>
            <h4 className={'subtitle'}>Actors and Art</h4>
            <div className="actors">
                {
                    actors?.map(actor => (
                        <div key={actor.id} className={'actor'}>
                            <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="photo"/>
                            <h6>{actor.name}</h6>
                            <p>{actor.known_for_department}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Actors;