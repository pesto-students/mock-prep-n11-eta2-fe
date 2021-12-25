import { authActions } from "Redux/Actions/authActions";

const authActionCreator = {
 
    setRole: function (dispatch, isLoggedIn,setCookie) {
        setCookie("isLoggedIn",isLoggedIn)
        dispatch({ type: authActions.setRole, isLoggedIn: isLoggedIn })
    },
    
    LogIn: function (dispatch, user, setCookie) {
        setCookie("user",user)
        dispatch({type : authActions.login, user})
    },
    
    logOut: function (dispatch, removeCookie) {
        removeCookie("user")
        dispatch({type : authActions.logout})
    }
}

export default authActionCreator;