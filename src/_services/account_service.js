//** import des modules nécessaires */
import Axios from "./caller_service";

let login = (credentials) => {
    return Axios.post('http://localhost:8000/api/login', credentials)
}

let lougout = () => {
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

export const accountService = {
    login,
    lougout,
    isLogged,
    getToken,
    saveToken
}