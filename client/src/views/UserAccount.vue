<template>
<div class="userAccount">
  <b-card no-body>
    
    <b-card align="center" style="min-height:15rem">
      <b-avatar size="72px" style="margin-top:5rem"></b-avatar> 
        <br>
        <h2 style="color:#2D6187">Quân Nguyễn{{ username }}</h2>
    </b-card>

    <b-tabs pills card vertical variant="info">
      
      <b-tab title="Thông tin người dùng" active class="w-100"><b-card-text>
          <UserInfo/>
      </b-card-text></b-tab>

      <b-tab title="Danh sách yêu thích"><b-card-text>
          <Favorite/>
      </b-card-text></b-tab>
      
      <b-tab title="Thông báo"><b-card-text>
          <Notification/>
      </b-card-text></b-tab>

      <b-tab title="Thông kê nhà trọ" v-if="activeStatus"><b-card-text>
          <Estate/>
      </b-card-text></b-tab>

      <b-tab title="Tin nhắn"><b-card-text>
          <Chat/>
      </b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
import UserInfo from "./User/UserInfo"
import Favorite from "./User/Favorite"
import Notification from "./User/Notification"
import Estate from "./User/Estate"
import Chat from "./User/Chat"

export default {
    components: {
      UserInfo,
      Favorite,
      Chat,
      Estate,
      Notification
},
    data () {
      return {
         usr: ""
      }
    },
}
</script>

<style  scoped>
  .cyan1 {
    background-color: #28abb9;
  }
  .cyan2 {
    color: #2D6187;
  }
  .cyan3 {
    color: #EFFAD3;
  }
  .cyan4 {
    background-color: #a8dda8;
  }
</style>>