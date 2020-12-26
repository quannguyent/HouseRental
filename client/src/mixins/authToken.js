import axios from "axios"
export default {
    name : "authToken",
    methods : {
        getUsrInfo : (token) => {
            const sentData = {
                authorization : "bearer" + token
            }
            axios.get("http://localhost:8081/api/user/user-info", sentData)
                 .then(res => {
                    return res.data  
                 })
                 .catch(err => {
                     console.log(err.response)
                     return null
                 })
        }, 

        checkAuth : (token) => {
            const sentData = {
                authorization : "bearer" + token
            }
            axios.post("http://localhost:8081/api/user/check-auth", sentData) 
                 .then(res => {
                     return res.data
                 })
                 .catch(err => {
                     console.log(err.response)
                     return null
                 })

            
        }

    }
}