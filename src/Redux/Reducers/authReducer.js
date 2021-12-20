

export default function authReducer(state = { role: "admin", isLoggedIn : true }, action)
{
    switch (action.type) {
        case 'SET_ROLE' :
            {
                return {
                    ...state,
                    isLoggedIn : action.isLoggedIn
                }
            }
            
        default:
            return state;
    }
}