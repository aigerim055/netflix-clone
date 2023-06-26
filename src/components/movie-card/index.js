import React from 'react';
import {useNavigate} from "react-router-dom";

const MovieCard = ({img, id}) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/movie/${id}`)
    }

    return (
        <div onClick={() => handleClick()} className={'movie-card'} >
            <img  src={`https://image.tmdb.org/t/p/original${img}`} alt=""/>
        </div>
    );
};

export default MovieCard;