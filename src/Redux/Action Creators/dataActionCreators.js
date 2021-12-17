import dataAction from "../Actions/dataAction";

export default dataActionCreator = {
    getData : async function(dispatch,getData){
                    const data = await getData();
                    dispatch({type : dataAction.setData, data : data})
                }
}