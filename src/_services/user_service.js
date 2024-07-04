/** importation des modules nécessaires */
import Axios from "./caller_service";
let getAllUser = () => {
    return Axios.get('http://localhost:8000/api/admin/user')
}

export const userService = {
    getAllUser
}
