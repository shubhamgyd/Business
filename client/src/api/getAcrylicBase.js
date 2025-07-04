import axios from "axios";

const BaseURL = "https://ganesh-furniture-backend.onrender.com/furniture"
export const getAllAcrylicBase = async () => {
    const url = `${BaseURL}/acrylic-base`
    const {data} = await axios.get(url);
    console.log(data);
    return data
}