import {combineReducers} from "redux";
import {FNAME, SNAME} from "./actions";

let initFName = {
    fname: ''
}

export const getFName = (state = initFName, action = {}) => {
    switch (action.type) {
        case FNAME:
            return {...state, fname: action.payload}
        default:
            return {...state}
    }
}


let initSName = {
    sname: ''
}

export const getSName = (state = initSName, action = {}) => {
    switch (action.type) {
        case SNAME:
            return {...state, sname: action.payload}
        default:
            return {...state}
    }
}

const rootReducer = combineReducers({
    getSName,
    getFName
})
export default rootReducer;


