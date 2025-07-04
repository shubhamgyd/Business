import axios from "axios";

const BaseURL = "https://ganesh-furniture-backend.onrender.com/furniture"
export const getAllDoubleTopBase = async () => {
    const url = `${BaseURL}/doubleTop-base`
    const {data} = await axios.get(url);
    return data
}