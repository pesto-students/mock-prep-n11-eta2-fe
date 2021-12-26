import authActionCreator from "Redux/Action Creators/authActionCreators";
import errorActionCreator from "Redux/Action Creators/erroActionCreators";

export const utilityFunction = {
    logOut : function (dispatch,removeCookie){
        authActionCreator.logOut(dispatch);
        removeCookie('user');
      
    },
    logIn : function (dispatch,user,role,setCookie) {
        authActionCreator.logIn(dispatch,user,role,setCookie)
    },
    setError : function(dispatch,err){
        errorActionCreator.setError(dispatch,err)
    }
}