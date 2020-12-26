<template>
  <div class="h-100 ">
    <HeadBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import HeadBar from "./components/NavBar.vue"
  import Footer from "./components/Footer.vue"
  import axios from 'axios'
  import cookieCRUD from "./mixins/cookie.js"
  export default {
    name : 'app',
    components: {
      HeadBar,
      Footer
    }, 
    data: () => { 
      return {
        firstname : String,
        lastname : String,
        username : String,
        password : String,
        isLogin : Boolean,
        email : String,
        typeAccount : Boolean,
        activeStatus : Boolean,
      } 
    },
    mixins : [cookieCRUD],
    mounted() {
      const token = this.getCookie("token");
      console.log(token);
      axios.post("http://localhost:8081/api/user/check-auth/",{},{
        headers: {
          'Authorization': 'Bearer '+ token,
        },
      })
        .then(res => {
          this.activeStatus = res.data.activeStatus;
          this.isLogin = true;
        })
        .catch(err => {
          console.log(err.response)
        })

      axios.get("http://localhost:8081/api/user/user-info/", {
        headers: {
          'Authorization': 'Bearer '+ token,
        },
      })
        .then(res => {
          // console.log(res.data);
          this.username = res.data.username;
          this.firstname = res.data.firstname;
          this.lastname = res.data.lastname;
          this.email = res.data.email;
          this.typeAccount = res.data.typeAccount;
        })
        .catch(err => {
          console.log(err.response)
        })
    },      
  } 
</script>

<style>
.cyan1 {
  background-color: #28abb9;
}
.cyan2 {
  background-color: #2D6187;
}
.cyan3 {
  background-color: #EFFAD3;
}
.cyan4 {
  background-color: #a8dda8;
}
</style>
