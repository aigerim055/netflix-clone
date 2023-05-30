import axios from "axios";


export const getPopularMovies = () => {
    return (dispatch) => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2b45247853b02c34d915443548d8a9b5')
            .then(({data}) => {
                dispatch({type: 'GET_POPULAR_MOVIES', payload: data})
            })
    }
}