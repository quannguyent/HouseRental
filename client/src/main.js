import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cookieCRUD from "./mixins/cookie.js"

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

var vm = new Vue({
  router,
  render: h => h(App),
  props : {
    username : String,
    password : String,
  },
  mixins : [cookieCRUD],
  created() {
    const token = this.getCookie("token");
    axios.post("http://localhost:8081/api/user/check-auth/", token)
      .then(res => {
        console.log(res)
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
        console.log(res)
      })
      .catch(err => {
        console.log(err.response)
      })
  }
}).$mount('#app')

vm.check_status = ""
vm.username = ""
vm.password = ""

vm.username_note = ""
vm.password_note = ""
vm.email_note = ""

vm.user_reg = ""
vm.pass_reg = ""
vm.firstname = ""
vm.lastname = "" 
vm.email_reg = ""
vm.err_log = ""
