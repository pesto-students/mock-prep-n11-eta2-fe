import errorAction from "../Actions/errorAction";

export default errorActionCreator = {
    setError :  function(dispatch,error){
                    dispatch({type : errorAction.setError, error : error})
                }
}