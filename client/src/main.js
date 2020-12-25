import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/mdbvue.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var vm = new Vue({
  router,
  render: h => h(App)
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
