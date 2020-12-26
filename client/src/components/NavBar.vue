<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="cyan1" style="position:sticky">
      <b-navbar-brand href="#" to="/" class="md-0 display-1">
        <b-icon-geo-alt-fill/> 
        EasyAccomond
      </b-navbar-brand>
      
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" to="/room">Phòng trọ</b-nav-item>
          <b-nav-item href="#" to="/about">Liên hệ</b-nav-item>
          <b-nav-item href="#" to="/login" v-if="(!isLogin)">Đăng nhập</b-nav-item>
          <b-nav-item href="#" to="/signup" v-if="(!isLogin)">Đăng ký</b-nav-item>
          <b-nav-item href="#" to="/account" v-if="(isLogin)">Xin chào, {{username}} </b-nav-item>
          <b-nav-item href="#" to="/" v-if="(isLogin)" @click="logout(), isLogin=!isLogin">Đăng xuất</b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="bell-fill" variant="light"></b-icon>
          </b-nav-item>  
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
import cookieCRUD from "../mixins/cookie.js"
export default {
  name: 'HeadBar',
  props: {
    UserInfo: Object,
  },
  data: () => {
    return {
      username: 'Thu',
      isLogin: true,
    }
  },
  mixins: [cookieCRUD],
  methods: {
    logout(){
      this.delCookie("token");
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
.cyan1 {
  background-color: #28abb9;
}
</style>
