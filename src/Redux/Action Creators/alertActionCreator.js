import { alertActions } from "Redux/Actions/alertActions"

const alertActionCreator = {
    
    setMessage: function (dispatch, data) {
                   
                  dispatch({type : alertActions.setMessage,data:data})
    },

    setError: function (dispatch, data) {
       
        dispatch({type : alertActions.setError,data:data})
    }
}

export default alertActionCreator
