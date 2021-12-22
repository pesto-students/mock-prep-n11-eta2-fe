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
               
                return {
                    ...state,
                    user : action.user.data,
                    role : action.user.role
                }
            }
        case  'TEST':{
            state.isLoggedIn = true;
            state.user = action.user
            state.role = action.role
           
            return {
                ...state
            }
        }
        case 'LOGOUT':{
            
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
