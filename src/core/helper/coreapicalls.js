import { API } from "../../backend";
// RequestInfo

// API + required prefix for resource

// method
// headers

export const getProducts = () =>{
    return fetch(`${API}/products`,{
        method: "GET"})
            .then(response => response.json())
            .catch(err => console.log(err))
}


export const getCategories = () => {
    return fetch(`${API}/categories`,{
        method: "GET"})
            .then(response => response.json())
            .catch(err => console.log(err))
}
