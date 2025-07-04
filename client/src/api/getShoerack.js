import axios from "axios";

const BaseURL = "https://ganesh-furniture-backend.onrender.com/furniture"
export const getAllShoerack = async () => {
    const url = `${BaseURL}/shoerack`
    const {data} = await axios.get(url);
    console.log(data);
    return data
}