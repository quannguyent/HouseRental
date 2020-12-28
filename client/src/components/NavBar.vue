<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color:#2d6187" fixed="top">

      <b-navbar-brand href="#" to="/" class="md-0 display-1">
        <b-icon-geo-alt-fill/> 
        EasyAccomond
      </b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" @load='checkAuth()' to="/admin" v-if="(typeAccount==2)">Quản lý</b-nav-item>
          <b-nav-item href="#" to="/room/" v-if="isLogin">Tạo phòng</b-nav-item>
          <b-nav-item href="#" to="/roomSearch">Tìm kiếm</b-nav-item>
          <b-nav-item href="#" to="/about">Liên hệ</b-nav-item>
          <b-nav-item href="#" to="/login" v-if="(!isLogin)">Đăng nhập</b-nav-item>
          <b-nav-item href="#" to="/signup" v-if="(!isLogin)">Đăng ký</b-nav-item>
          <b-nav-item href="#" to="/account" v-if="(isLogin)">Xin chào, {{firstname}} </b-nav-item>
          <b-nav-item href="#" to="/" v-if="(isLogin)" @click="logout(), isLogin=false">Đăng xuất</b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="bell-fill" variant="light"></b-icon>
          </b-nav-item>  
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
  import axios from 'axios'
  import cookieCRUD from "../mixins/cookie.js"
  import authToken from "../mixins/authToken.js"
  export default {
    name : 'app',
    components: {
    }, 
    data: () => { 
      return {
        firstname : String,
        lastname : String,
        username : String,
        password : String,
        isLogin : false,
        email : String,
        typeAccount : Number,
        activeStatus : Boolean,
      } 
    },
    mixins : [cookieCRUD, authToken],
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
          console.log(res.data);
          this.username = res.data.username;
          this.firstname = res.data.firstName;
          this.lastname = res.data.lastName;
          this.email = res.data.email;
          this.typeAccount = res.data.typeAccount;
          this.activeStatus = res.data.activeStatus;
        })
        .catch(err => {
          console.log(err.response)
        })
        
    },      
  methods: {
    logout(){
      this.delCookie("token");
    },
    getAuth(){
      this.checkAuth(this.getCookie("token"));
    },
    getUserInfo(){
      this.getUsrInfo(this.getCookie("token"));
    }
  }
}
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
