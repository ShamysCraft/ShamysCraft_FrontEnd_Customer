import { API } from "../../backend";

export const createOrder = (userId, token, orderData) =>{
    return fetch(`${API}/order/create/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: orderData})

    })
    .then(response => response.json())
    .catch(err => console.log(err))
}



// 2. getOrders
export const getOrders = (userId, token) =>{
    return fetch(`${API}/order/all/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => (response.json()))
    .catch(err => console.log(err))
}