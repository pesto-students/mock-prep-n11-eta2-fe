import axios from "axios"

export async function removeData(url,itemName) {
    let res = await axios.delete(url);
    if (res.status === 200) { 
        alert(itemName+" Removed Successfully");
    }
    return res;
}