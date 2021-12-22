import axios from "axios"
import errorActionCreator from "Redux/Action Creators/erroActionCreators";

//Get Call
export async function getData(url,) {
    let res = await axios.get(url);
    return res;
}

//Post Call
export async function insertData(url, data) {
    try{
        let res = await axios.post(url,data);
        return {status : "success",res};
    }
    catch (err){
        return  {status : "failure",err : "Sign Up Failed"};
    }
    
    
}

// Delete Call
export async function removeData(url) {
    let res = await axios.delete(url);
    return res;
}

// Update Call
export async function updateData(url, data) {
    let res = await axios.post(url,data);
    return res;
}



