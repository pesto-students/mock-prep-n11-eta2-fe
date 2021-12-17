import authActions from "../Actions/authActions";

export default function authReducer (state = {role  : "admin"},action){
    switch(action.type){
        case authActions.setRole:
            return state.role = action.role
        case authActions.adminLoginRequest:{
            
             state = {...state, login : action.status}
             console.log(state)
             return state;
            }
        default:
            return state;
    }

}