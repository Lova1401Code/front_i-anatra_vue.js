//** import des modules nécessaires */
import Axios from "./caller_service";

let login = (credentials) => {
    return Axios.post('/api/login', credentials)
}
export const accountService = {
    login
}