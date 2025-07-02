import axios from "axios";

const BaseURL = "http://localhost:8080/furniture"
export const getAllMandir = async () => {
    const url = `${BaseURL}/mandir`
    const {data} = await axios.get(url);
    console.log(data);
    return data
}