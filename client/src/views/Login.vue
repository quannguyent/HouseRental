<template>
  <div class="form-signin"> 
    <div class="mx-auto">
            <form v-on:submit.prevent="onSubmit">
              <div align="center" style="color:#2d6187">
                <b-icon-person-circle font-scale="4" class="mb-4"></b-icon-person-circle>
                <h1 class="h3 mb-3 fw-normal">Đăng nhập</h1>
              </div>
                <label for="inputEmail" class="visually-hidden">Tên đăng nhập:</label>
                <input type="text" id="inputEmail" class="form-control" v-model="username" placeholder="Username" required autofocus>
                <label for="inputPassword" class="visually-hidden mt-2">Mật khẩu:</label>
                <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me"> Remember me
                  </label>
                </div>

                <div class="mx-auto">
                  {{check_status}}
                </div>
                <button class="w-100 btn btn-lg btn-primary round" style="background-color:#28abb9" type="submit" @click="sendAPI()">Sign in</button>
                <div align="center">
                  <b-nav-text>Chưa có tài khoản?
                  <b-nav-item href="#" to="/signup" style="list-style-type: none;">Đăng ký ngay</b-nav-item>
                </b-nav-text> 
              </div>
            </form> 
    </div>
  </div>
</template>

<script>
import axios from "axios"
import cookieCRUD from "../mixins/cookie.js"

  export default {
    name : 'login',
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
body {
  height: 100%;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  margin-top: 15vh;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

@media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
