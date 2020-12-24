import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted () {
    axios.get('http://localhost:8081/api/user/user-info')
      .then(response => (this.info = response))
  }
}).$mount('#app')
