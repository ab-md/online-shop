import axios from "axios";

import { BASE_URL } from "./redux/configs";


const getCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products/categories`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export {
    getCategories,
}