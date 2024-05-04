import router from "@/router"
export function auth_guard(to) {
    let token = localStorage.getItem('token')
    console.log('token')

    if (token) {
        return true
    }
    router.push('/')
}