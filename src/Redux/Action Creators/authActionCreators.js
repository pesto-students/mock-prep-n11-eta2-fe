import { authActions } from "Redux/Actions/authActions";
import { errorActions } from "Redux/Actions/errorAction";



const authActionCreator = {
    getRole : async function(dispatch,getRole){
                    const role = await getRole();
                    dispatch({type : authActions.setRole, role : role})
                },
    loginAdmin : function(dispatch,{userName, password}){
                    fetch('/admin/adminLogin',{
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
                            dispatch({type : authActions.adminLoginRequest, status : data.status})
                            errorActions.setError(dispatch,"")
                        }
                      })
                      .catch(error => console.log(error))
                    }
}

export default authActionCreator;