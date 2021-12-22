import { authActions } from "Redux/Actions/authActions";
import errorActions from "Redux/Actions/errorAction";



const authActionCreator = {
    getRole : async function(dispatch,getRole){
                    const role = await getRole();
                    dispatch({type : authActions.setRole, payload : {role, isLoggedIn : true}})
                },
    setRole :  (dispatch,isLoggedIn) =>{
                    dispatch({type : authActions.setRole, isLoggedIn : isLoggedIn})
                },     
    loginAdmin : function(dispatch,{userName, password}){
                    fetch('https://mockprep.herokuapp.com/admin/adminLogin',{
                        method : 'POST',
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({userName,password})

                    }).then(response => response.json())
                      .then(data => {
                        if(data.error) {
                            errorActions.setError(dispatch,data.error)
                            dispatch({type : authActions.adminLoginRequest, status : ""})
                        }
                        else {
                            dispatch({type : authActions.setRole, status : data.status})
                        }
                      })
                      .catch(error => console.log(error))
                    },
    setUser : function (dispatch, user){
                        dispatch({type : authActions.setUser, user : user,role : "Student"})
                    },
    testLogin : function (dispatch,user){
                        dispatch({type : authActions.test, user})
                    },
    logOut : function (dispatch){
                        dispatch({type : authActions.logout})
                    }
}

export default authActionCreator;