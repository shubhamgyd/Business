import axios from "axios";

const BaseURL = "https://ganesh-furniture-backend.onrender.com/furniture";
// const BaseURL = "http://localhost:8080/furniture";

export const getAllFurnitures = async () => {
    try {
        let url = `${BaseURL}/all`
        const {data} = await axios.get(url);
        return data
    } catch (err) {
        console.error(err.message);
    }
}