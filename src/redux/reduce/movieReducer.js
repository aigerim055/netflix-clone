
const initialState = {
    popular_movies: []
}

export default  function MovieReducer(state = initialState, action ) {
    switch (action.type) {
        case 'GET_POPULAR_MOVIES':
            return {...state, popular_movies: action.payload}
        default:
            return state
    }
}