import { alertActions } from "Redux/Actions/alertActions"

export default function alertReducer(state = { error: null }, action) {
   
    switch(action.type){
        case alertActions.setMessage:
            state.message = action.data;
            state.isError = false;
            return {
                ...state
            }
        case alertActions.setError:
            state.error = action.data;
            state.isError = true;
                return {
                    ...state
                }
        default:
            return state;
    }
}