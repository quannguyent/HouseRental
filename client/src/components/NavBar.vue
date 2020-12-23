<template>
  <div class="navbar-static-top hello" :class="{invisible : is_login}">
    <nav class="navbar navbar-static-top navbar-light d-flex justify-content-start"> 
        <router-link to = "/" class="navbar-brand p-2"><p class="text-logo">RENTAL APP </p></router-link>
        <router-link to = "About" class="nav-item p-2"><p> About us</p></router-link>
        <p class="nav-item p-2 ml-auto">Welcome <b>{{user_name}}</b></p>
        <p class="nav-item p-2">Logout</p>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeadBar',
  data: () => {
    return {
    }
  }, 
  props: {
    user_name: String,
    is_login: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .hello {
        background-color: #563d7c;
    }
    p {
        margin-left: 30px;
        margin-bottom: 0;
        color: #cbbde2;
    }
    p.text-logo {
        color: white; 
    } 

</style>
