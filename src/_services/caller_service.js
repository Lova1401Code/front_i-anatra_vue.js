/** import des models nécessaires */
import axios from 'axios'
import { accountService } from './account_service';
import router from '@/router';

const Axios = axios.create({
    baseUrl: 'http://localhost:8000'
});

Axios.interceptors.request.use(request => {
    console.log(request)
    let token = accountService.getToken()
    if (token) {
        request.headers.Authorization = 'Bearer ' + token
    }
    return request
})
Axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status == 401) {
        // console.log("erreur")
        accountService.lougout()
        router.push("/login")
    }
})

export default Axios 