import {errorActions} from "../Actions/errorAction";

export default function errorReducer (state = {error : "Error Found"},action){
    switch(action.type){
        case errorActions.setError:
            return state.error = action.error
        default:
            return state;
    }
}