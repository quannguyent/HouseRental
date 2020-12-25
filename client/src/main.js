import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var vm = new Vue({
  router,
<<<<<<< HEAD
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
=======
  render: h => h(App)
>>>>>>> 42864bb081ba0845771a1a4b93b9eba905f26807
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
