import axios from "axios";

const BaseURL = "http://localhost:8080/furniture"
export const getAllShoerack = async () => {
    const url = `${BaseURL}/shoerack`
    const {data} = await axios.get(url);
    console.log(data);
    return data
}