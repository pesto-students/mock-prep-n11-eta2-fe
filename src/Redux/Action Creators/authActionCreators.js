import { authActions } from "Redux/Actions/authActions";


const authActionCreator = {
 
    setRole: function (dispatch, isLoggedIn) {
      
        dispatch({ type: authActions.setRole, isLoggedIn: isLoggedIn })
    },
    
    logIn: function (dispatch, user ) {
       
        dispatch({type : authActions.login, user})
    },
    
    logOut: function (dispatch) {
        
        dispatch({type : authActions.logout})
    }
}

export default authActionCreator;   