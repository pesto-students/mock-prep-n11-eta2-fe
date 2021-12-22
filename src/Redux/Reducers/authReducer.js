import reactRouterDom from "react-router-dom";
import { authActions } from "Redux/Actions/authActions";

export default function authReducer(state = { role: null , isLoggedIn : false, user : null}, action)

{
    switch (action.type) {
        case 'SET_ROLE' :
            {
                return {
                    ...state,
                    isLoggedIn : action.isLoggedIn
                }
            }
        case authActions.setUser:
            {
                console.log(action)
                return {
                    ...state,
                    user : action.user.data,
                    role : action.user.role
                }
            }
        case  'TEST':{
            console.log(action)
            state.isLoggedIn = true;
            state.user = action.user
            state.role = action.role
            console.log(state)
            return {
                ...state
            }
        }
        case 'LOGOUT':{
            console.log(state)
            state.isLoggedIn = false;
            state.user = null
            state.role = null
            return {
                ...state
            }
        }
        default:
            return state;
    }
}
