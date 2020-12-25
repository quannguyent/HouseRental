import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"


Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  name : 'app',
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
