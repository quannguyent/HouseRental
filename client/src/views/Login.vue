<template>
  <div id="login d-flex align-items-center" >
    <div class="jumbotron rounded mx-auto d-block col-9">
      <div class="container d-flex justify-items-center"> 
       <div class="d-flex flex-column w-100">
         <div class="mx-auto">
           <b class="brand"> Đăng nhập </b>
         </div>

         <div class="mx-auto mb-4">
           <input type="text" class="form-control" v-model="username" placeholder="Username" />
         </div>

         <div class="mx-auto mb-4">
           <input type="password" class="form-control" v-model="password" placeholder="Password" />
         </div>
         <div class="mx-auto mb-4">
           <b-btn gradient="purple" class="mb-4" rounded @click="sendAPI()">Submit</b-btn>
         </div>
         <div class="mx-auto mb-4">
           {{check_status}}
         </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script>
import axios from "axios"
import cookieCRUD from "../mixins/cookie.js"
  export default {
    name : 'login',
    components: {

    }, 
    mixins: [cookieCRUD],
    props : {
    },
    data() {
      return {
        check_status : "",
        username : "",
        password : "",
        token : ""
      }
    },
     
    methods : {
      sendAPI() {
        const user = {
          "username" : this.username,
          "password" : this.password
        }

        axios.post("http://localhost:8081/api/user/sign-in", user) 
             .then(res => {
                this.setCookie("token", res.data, 1)
                //console.log(document.cookie.token) 
                this.$router.push('/')
             })
             .catch(err => {
               if (err.response) {
                 this.check_status = err.response.data.error
               }
             })
      }
    }, 
    
    
  }   
  
</script>

<style>
.brand {
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
