import errorAction from "../Actions/errorAction";

const errorActionCreator = {
    setError :  function(dispatch,error){
                    dispatch({type : errorAction.setError, error : error})
                }
}

export default errorActionCreator