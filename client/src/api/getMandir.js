import axios from "axios";

const BaseURL = "https://ganesh-furniture-backend.onrender.com/furniture"
export const getAllMandir = async () => {
    const url = `${BaseURL}/mandir`
    const {data} = await axios.get(url);
    console.log(data);
    return data
}