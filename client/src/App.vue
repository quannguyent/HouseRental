<template>
  <div class="h-100 ">
    <!-- <HeadBar/> -->
    <div>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
    <!-- <Footer/> -->
    <router-view/>
  </div>
</template>

<script>
  // import HeadBar from "./components/NavBar.vue"
  // import Footer from "./components/Footer.vue"
  export default {
    name : 'app',
    components: {
      // HeadBar,
      // Footer
    }, 
    data() {
      return {
      }
    },        
  } 
</script>

<style>

</style>
