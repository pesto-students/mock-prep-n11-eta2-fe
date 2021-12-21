import axios from "axios"

//Get Call
export async function getData(url,) {
    let res = await axios.get(url);
    return res;
}

//Post Call
export async function insertData(url, data) {
    let res = await axios.post(url,data);
    return res;
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



