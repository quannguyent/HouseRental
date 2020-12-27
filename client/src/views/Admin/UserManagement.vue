<template>
  <div>
    <b-row>
        <b-col cols="10"><b-table striped hover :items="listUser"></b-table></b-col>
        <b-col cols="1">Phê duyệt</b-col>
        <b-col cols="1">Nhắn tin</b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
import Auth from "../../mixins/authToken.js"
import Cookie from "../../mixins/cookie.js"
export default {
    mixins: [Auth, Cookie],
    data: () => {
        return {
            listUser: [{
            firstname : String,
            lastname : String,
            username : String,
            password : String,
            isLogin : Boolean,
            email : String,
            activeStatus : Boolean,
            typeAccount : 1,
            }]
        }    
    },
    mounted() {
        const token = this.getCookie("token")
        axios.get("http://localhost:8081/api/user/get-list-account", {
            headers: {
                'Authorization': 'Bearer '+ token,
            }
        })        
        .then(res => {
            this.listUser = res.data;
        })
        .catch(err => {
          console.log(err.response)
        })
    }
}
</script>

<style>

</style>