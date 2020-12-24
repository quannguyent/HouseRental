<template>
  <mdb-navbar expand="lagre" dark color="indigo" class="warm-flame-gradient color-block-5 mb-3 mx-auto z-depth-1">
    <mdb-navbar-brand href="#">
      Rental App
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="#" to="/" active>Trang chủ</mdb-nav-item>
        <mdb-nav-item href="#" to="room">Nhà trọ</mdb-nav-item>
        <mdb-nav-item href="#" to="about">Liên hệ</mdb-nav-item>
        <mdb-nav-item href="#" to="login" v-if="!is_login">Đăng nhập</mdb-nav-item>
        <mdb-nav-item href="#" to="signup" v-if="!is_login">Đăng ký</mdb-nav-item>
        <mdb-nav-item href="#" v-if="is_login">Xin chào {user_name}</mdb-nav-item>
        <mdb-nav-item href="#" @click="logout" v-if="is_login">Đăng xuất</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
export default {
  name: 'HeadBar',
  data: () => {
    return {

    }
  }, 
  props: {
    user_name: String,
    is_login: Boolean
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem
  },
}
</script>

<style>
</style>
