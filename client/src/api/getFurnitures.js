import axios from "axios";

const BaseURL = "http://localhost:8080/furniture";

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