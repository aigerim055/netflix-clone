import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import MovieCard from "../movie-card";

export default function MoviesSwiper({movies}) {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    {
                        movies?.slice(0, 3).map(movie => (
                            <MovieCard img={movie.backdrop_path} name={movie.original_title}/>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        movies?.slice(3, 6).map(movie => (
                            <MovieCard img={movie.backdrop_path} name={movie.original_title}/>
                        ))
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        movies?.slice(6, 9).map(movie => (
                            <MovieCard img={movie.backdrop_path} name={movie.original_title}/>
                        ))
                    }
                </SwiperSlide>
            </Swiper>
        </>
    );
}
