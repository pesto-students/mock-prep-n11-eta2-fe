import errorAction from "../Actions/errorAction";

export default function errorReducer (state = {error : ""},action){
    switch(action.type){
        case errorAction.setError:
            return state.error = action.error
        default:
            return state;
    }

}