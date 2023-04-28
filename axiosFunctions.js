import axios from "axios";

export default class MyAxiosFunctions{
    
    getProducts() {

        return axios.get('https://dummyjson.com/products')

    }

}
