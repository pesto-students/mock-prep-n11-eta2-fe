import axios from "axios"

export async function insertData(url, data) {
    console.log("inserting")
    let res = await axios.post(url,data);
    if (res.status === 200) { 
        alert(" Insert Successfull");
    }
    return res;
}