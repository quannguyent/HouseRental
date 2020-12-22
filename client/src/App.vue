<template>
  <div id="app">
    <div id="nav">
      <HeadBar user_name='Vu Cong' :is_login="false"/>
    </div>
    <p></p>
    <router-view/>
  </div>
</template>

<script>
  import HeadBar from "./components/NavBar.vue";
  import axios from "axios"; 
  export default {
    name : 'app',
    components: {
      HeadBar
    }, 
    data() {
      return {
        get_from_api : []
      }
    }, 
    
    mounted() {
      axios.get("http://jsonplaceholder.typicode.com/posts")
        .then(res => {
          this.get_from_api = res.data;
        })
        .catch(err => {
          console.log(err);
        })
          
    } 
  }   
  

  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
