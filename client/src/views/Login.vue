<template>
  <div id="login d-flex align-items-center" >
    <div class="jumbotron rounded mx-auto d-block col-9">
      <div class="container d-flex justify-items-center"> 
       <div class="d-flex flex-column w-100">
         <div class="mx-auto">
           <b class="brand"> LOGIN </b>
         </div>

         <div class="mx-auto mb-4">
           <input type="text" class="form-control" v-model="username"  />
         </div>

         <div class="mx-auto mb-4">
           <input type="password" class="form-control" v-model="password" />
         </div>
         <div class="mx-auto mb-4">
           <mdb-btn gradient="purple" class="mb-4" rounded @click="sendAPI()">Submit</mdb-btn>
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
import {mdbBtn} from 'mdbvue'
  export default {
    name : 'login',
    components: {
      mdbBtn
    }, 
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
                this.token = res.data 
                this.$router.push('/about')
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
