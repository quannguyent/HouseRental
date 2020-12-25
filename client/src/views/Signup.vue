<template>
   <div class="login d-flex align-items-centerr"> 
      <div class="jumbotron rounded mx-auto d-block col-9">
         <div class="container d-flex justify-items-center">
            <div class="d-flex flex-column w-100">
               <div class="mx-auto">
                  <b class="brand"> SIGN UP </b>
               </div>

               <div class="mx-auto mb-4">
                  <input type="text" class="form-control" v-model="user_reg" placeholder="Username" /> 
               </div>

               <div class="mx-auto mb-4">
                  <input type="password" class="form-control" v-model="pass_reg" placeholder="Password" />
               </div>
               
               <div class="mx-auto mb-4">
                  <input type="text" class="form-control" v-model="firstname" placeholder="First name" />
               </div>
            
               <div class="mx-auto mb-4">
                  <input type="text" class="form-control" v-model="lastname" placeholder="Last name" />
               </div>

               <div class="mx-auto mb-4">
                  <input type="text" class="form-control" v-model="email_reg" placeholder="Email"/>
               </div>
               <div class="mx-auto mb-4">
                  <button class="mb-4 rounded" @click="sign()">Submit</button> 
               </div>

               <div class="mx-auto mb-4">
                  {{err_log}}
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
export default {
   name : 'Signup', 
   data ()  {
      return {
         user_reg : '', 
         pass_reg : '',
         email_reg : '',
         firstname : '',
         lastname : '', 
         err_log : ''
      }
   }, 
    
   components: {
   }, 
   methods: {
      sign () {
         const sent_data = {
            "username" : this.user_reg,
            "password" : this.pass_reg, 
            "email" : this.email_reg,
            "firstName" : this.firstname,
            "lastName" : this.lastname
         } 

         axios.post("http://localhost:8081/api/user/sign-up", sent_data) 
              .then(res => {
                 this.response.data = res.response.data
              })
              .catch(err => {
                 this.err_log = err.response.data.errorMessage;
              })
         
      } 
   },
}
</script>

<style scoped>
.brand {
   font-size: 30px;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>