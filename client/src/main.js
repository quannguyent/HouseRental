import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Antd);

var vm = new Vue({
  router,
  render: h => h(App),
  props : {
    username : String,
    password : String,
  },
  created() {
    let token = sessionStorage.getItem(token)
    axios.post("http://localhost:8081/api/user/check-auth",token)
      .then(res => {
        console.log(res);
        console.log(token);
      })
      .catch(err => {
        console.log(err);
      })
    axios.post("http://localhost:8081/api/user/user-info", token)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
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
