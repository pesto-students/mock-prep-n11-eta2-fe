import authActions from "../Actions/authActions";

export default authActionCreator = {
    getRole : async function(dispatch,getRole){
                    const role = await getRole();
                    dispatch({type : authActions.setRole, role : role})
                }
}