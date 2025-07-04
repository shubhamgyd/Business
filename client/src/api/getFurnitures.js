import axios from "axios";

const BaseURL = "https://ganesh-furniture-backend.onrender.com/furniture";

export const getAllFurnitures = async () => {
    try {
        let url = `${BaseURL}/all`
        const {data} = await axios.get(url);
        // console.log(data);
        return data
    } catch (err) {
        console.error(err.message);
    }
}