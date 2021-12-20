import { getData } from "api/Api";


const dataActionCreator = {
    
    getAdminData: async function (dispatch, url, type) {
                    console.log(type)
                    const data = await getData(url);
                    if (data.data.length > 0) {dispatch({type : type,data : data})}
                  
                }
    
}

export default dataActionCreator
