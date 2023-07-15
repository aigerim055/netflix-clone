
const initialState = {
    popular_movies: [],
    movie: [],
    trailer: [],
    reviews: [],
    recommendations: [],
    keywords: [],
    actors: [],
}

export default  function MovieReducer(state = initialState, action ) {
    switch (action.type) {
        case 'GET_POPULAR_MOVIES':
            return {...state, popular_movies: action.payload}
        case 'GET_MOVIE_BY_ID':
            return {...state, movie: action.payload}
        case 'GET_MOVIE_TRAILER_BY_ID':
            return {...state, trailer: action.payload}
        case 'GET_REVIEWS_FOR_MOVIE':
            return {...state, reviews: action.payload}
        case 'GET_RECOMMENDATIONS_FOR_MOVIE':
            return {...state, recommendations: action.payload}
        case 'GET_KEYWORDS_FOR_MOVIE':
            return {...state, keywords: action.payload}
        case 'GET_ACTORS_FOR_MOVIE':
            return {...state, actors: action.payload.slice(0, 12)}
        default:
            return state
    }
}