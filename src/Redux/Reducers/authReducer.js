import {authActions} from '../Actions/authActions'

export default function authReducer(state = { role: "admin", isLoggedIn : false }, action)
{
    switch (action.type) {
        case authActions.SET_ROLE:
            return state.role = action.role
        case authActions.setLogin:{
            console.log(action)
            state.isLoggedIn = action.isLoggedIn
            return {...state}
        }
            
        default:
            return state;
    }
}