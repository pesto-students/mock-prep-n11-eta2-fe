import { getData } from "api/Fetch";
import dataActions from "../Actions/dataAction";

const dataActionCreator = {

    getAdminData : async function(dispatch,url,type){
                    console.log(type)
                    const data = await getData(url);
                    dispatch({type : type,data : data})
                }
    
}

export default dataActionCreator