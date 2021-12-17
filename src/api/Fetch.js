import axios from "axios"

export async function getData(url) {
    let res = await axios.get(url);
    return res.data;
}