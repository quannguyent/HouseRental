<template>
   <div class="form-signup"> 
    <div class="mx-auto">
      <form v-on:submit.prevent="onSubmit">
        <div align="center" style="color:#2d6187">
          <b-icon-person-circle font-scale="4" class="mb-4"></b-icon-person-circle>
          <h1 class="h3 mb-3 fw-normal">Đăng ký</h1>
        </div>
        <b-row>
          <b-col>
            <label for="LastName" class="visually-hidden">Họ:</label>
            <input type="text" id="LastName" class="form-control" v-model="firstName" placeholder="VD: Nguyễn" required autofocus>   
          </b-col>
          <b-col>
            <label for="FirstName" class="visually-hidden">Tên:</label>
            <input type="text" id="FirstName" class="form-control" v-model="lastName" placeholder="VD: Thế Quân" required>   
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label for="Username" class="visually-hidden">Tên đăng nhập:</label>
            <input type="text" id="Username" class="form-control" v-model="username" placeholder="VD: quannguyen" required>
          </b-col>
          <b-col>
            <label for="inputEmail" class="visually-hidden">Email:</label>
            <input type="text" id="inputEmail" class="form-control" v-model="email" placeholder="VD: quannguyen@example.com" required>   
          </b-col>
        </b-row>

        <label for="inputPassword" class="visually-hidden mt-2">Mật khẩu:</label>

        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Mật khẩu có độ dài từ 6-18 ký tự" required>
        
        <b-row>
          <b-col>
            <label for="Phone" class="visually-hidden">Số điện thoại:</label>
            <input type="text" id="Phone" class="form-control" v-model="phone" placeholder="VD: 0374112205" required>
          </b-col>
          <b-col>
            <label for="IdentityCard" class="visually-hidden">CMTND/Căn cước:</label>
            <input type="text" id="IdentityCard" class="form-control" v-model="identityCard" placeholder="VD: 001200001808" required>
          </b-col>
        </b-row>

        <label for="Address" class="visually-hidden">Địa chỉ thường trú:</label>
        <input type="text" id="Address" class="form-control" v-model="address" placeholder="VD: Số 144, Xuân Thủy, Cầu Giấy, Hà Nội" required>   
        
        <div class="mx-auto">
          {{check_status}}
        </div>
        <button class="w-100 btn btn-lg btn-primary" style="background-color:#28abb9; margin-top:2vh" type="submit" @click="sign()">Sign up</button>
        <div align="center">
          <b-nav-text>Đã có tài khoản?
          <b-nav-item href="#" to="/signin" style="list-style-type: none;">Đăng nhập ngay</b-nav-item>
          </b-nav-text> 
        </div>
      </form> 
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
   name : 'Signup', 
   data ()  {
      return {
         username : '', 
         password : '',
         email : '',
         firstName : '',
         lastName : '', 
         identityCard: '',
         phone: '',
         address : '',
         err_log : ''
      }
   }, 
    
   components: {
   }, 
   methods: {
      sign () {
         const sent_data = {
            "username" : this.username,
            "password" : this.password, 
            "email" : this.email,
            "firstName" : this.firstName,
            "lastName" : this.lastName,
            "identityCard" : this.identityCard,
            "phone" : this.phone,
            "address" : this.address,
         } 

         const user = {
            "username" : this.username,
            "password" : this.password,
         }   
         
         axios.post("http://localhost:8081/api/user/sign-up", sent_data) 
              .then(res => {
                 console.log(res)
              })
              .catch(err => {
                 this.err_log = err.response.data.errorMessage;
              })
         axios.post("http://localhost:8081/api/user/sign-in", user)
            .then(res => {
               this.setCookie("token", res.data, 1)
               this.$router.push('/')
            })
            .catch(err => {
               this.check_status = err.response.data.error
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
body {
  height: 100%;
}
.form-signup {
  width: 50vw !important; 
  padding: 15px;
  margin: auto;
  margin-top: 7vh;
}
.form-signup .checkbox {
  font-weight: 400;
}
.form-signup .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signup .form-control:focus {
  z-index: 2;
}
.form-signup input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signup input[type="password"] {
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