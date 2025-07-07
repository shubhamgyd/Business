import axios from "axios";

// const BaseURL = "https://ganesh-furniture-backend.onrender.com/furniture"
const BaseURL = "http://localhost:8080/furniture"
export const getAllDoubleDoorDressing = async () => {
    const url = `${BaseURL}/doubleDoor-dressing`
    const {data} = await axios.get(url);
    // console.log(data);
    return data
}