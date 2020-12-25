<template>
  <div class="h-100 ">
    <HeadBar user_name="Vu Cong" />
    <router-view/>
  </div>
</template>

<script>
  import HeadBar from "./components/NavBar.vue"
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
          this.err_log = err.response.data.errorMessage;
        })
          
    } 
  }   
  

  
</script>

<style>

</style>
