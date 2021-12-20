import { dataActions } from "Redux/Actions/dataAction";

export const dataActionCreator = {
    
    getData: async function (dispatch, getData) {
        const data = await getData();
        dispatch({ type: dataActions.setData, data: data })
    },

    setInterviewer: function (dispatch, data) {
        dispatch({ type: dataActions.setInterviewer, data: data })
    },

    setReviews: function (dispatch, data) {
        dispatch({ type: dataActions.setReviews, data: data })
    }
}

