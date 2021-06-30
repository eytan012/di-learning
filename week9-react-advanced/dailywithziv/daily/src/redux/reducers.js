import {INIT_MOVIE,MOVIE_SELECTED,GET_YOGA} from './actions'


let initState = {
    movies: [],
    details: '',
    yogaPoses:[]
}


export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case INIT_MOVIE:
            return {...state, movies: action.payload};
        case MOVIE_SELECTED:
            return {...state, details: action.payload};
        case GET_YOGA:
            return {...state,yogaPoses:action.payload}
        default:
            return {...state}
    }

}