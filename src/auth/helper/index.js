import { API } from "../../backend";

export const signup = (user) => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => { return response.json() })
        .catch(err => {
            console.log(err)
        })
};

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


//browser does not rememebr json res
//set token in user browser
export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

// next allows to give a callback after the execution of the method
export const signout = next => {
    //if we have access to window object

    if (typeof window !== "undefined") {

        localStorage.removeItem("jwt")
        next();
        return fetch(`${API}/signout`, {
            method: 'GET'
        })
            .then(response => console.log("signout success"))
            .catch(err => console.log(err))
    }
}

//validate if user signin or not
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
}

