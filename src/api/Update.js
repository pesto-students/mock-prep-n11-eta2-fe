import axios from "axios"

export async function updateData(url, data) {
    console.log("updating")
    let res = await axios.post(url,data);
    if (res.status === 200) { 
        alert(" Update Successfull");
    }
    return res;
}
