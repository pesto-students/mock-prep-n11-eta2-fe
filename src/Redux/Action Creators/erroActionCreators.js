

const errorActionCreator = {
    setError :  (dispatch,error) => {
                    dispatch({type : 'SET_ERROR', error : error})
                }
}

export default errorActionCreator