import authActions from "../Actions/authActions";

export default function authReducer (state = {role  : "admin"},action){
    switch(action. type){
        case authActions.setRole:
            return state.role = action.role
        default:
            return state;
    }

}