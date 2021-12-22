import authActionCreator from "Redux/Action Creators/authActionCreators";
import errorActionCreator from "Redux/Action Creators/erroActionCreators";



export const utilityFunction = {
    logOut : function (dispatch,removeCookie,cookies){
        authActionCreator.logOut(dispatch);
        removeCookie('user');
        console.log(cookies)
    },
    logIn : function (dispatch,user,role,setCookie) {
        console.log(user)
        setCookie('user', JSON.stringify(user) )
        authActionCreator.testLogin(dispatch,user,role)
    },
    setError : function(dispatch,err){
        errorActionCreator.setError(dispatch,err)
    }
}