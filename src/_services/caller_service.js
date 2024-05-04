/** import des models nécessaires */
import axios from 'axios'

const Axios = axios.create({
    baseUrl: 'http://127.0.0.1:8000'
});

export default Axios