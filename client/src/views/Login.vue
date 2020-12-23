<template>
  <div class="login">
  <!-- Material form login -->
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <div class="grey-text">
      <mdb-input label="Your username" icon="envelope" type="text" v-model="username" />
      <mdb-input label="Your password" icon="lock" type="password" v-model="password" />
    </div>
    <div class="text-center">
      <mdb-btn type="button" @click="sendAPI()">Login</mdb-btn>
    </div>
  </form>
  <!-- Material form login -->
  </div>
</template>

<script>
  import axios from "axios"
  import { mdbInput, mdbBtn } from 'mdbvue';
  export default {
    name : 'login',
    components: {
      mdbInput,
      mdbBtn
    }, 
    props : {
      check_status : String,
      username : String,
      password : String 
    },
    data() {
      return {
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
               this.check_status = res.data;
             })
             .catch(err => {
               console.log(err)
             })
      }
    }
  }

</script>

<style scoped>
  .login {
    width: 25vw;
    margin: auto;
  }
</style>
