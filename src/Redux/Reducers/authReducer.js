import {authActions} from '../Actions/authActions'

export default function authReducer(state = { role: "admin" }, action)
{
    switch (action.type) {
        case authActions.SET_ROLE:
            return state.role = action.role
        default:
            return state;
    }
}