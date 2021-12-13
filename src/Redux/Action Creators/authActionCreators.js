import authActions from "../Actions/authActions";

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
                        dispatch({type : authActions.adminLoginRequest, status : data.status})
                      })
                    }
}

export default authActionCreator;