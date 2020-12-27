<template>
<div class="userAccount">
  <b-card no-body>
    <b-card align="center">
      <h2 class="cyan2">Admin</h2>
    </b-card>
    <b-tabs pills card vertical variant="info">
      
      <b-tab title="Quản lý người dùng" active><b-card-text>
          <UserManagement/>
      </b-card-text></b-tab>
      
      <b-tab title="Quản lý bài đăng"><b-card-text>
          <PostManagement/>
      </b-card-text></b-tab>

      <b-tab title="Nhắn tin"><b-card-text>
      </b-card-text></b-tab>
      
    </b-tabs>
  </b-card>
</div>
</template>

<script>
  import UserManagement from "./Admin/UserManagement"
  import PostManagement from "./Admin/PostManagement"
  export default {
    components: {
      UserManagement,
      PostManagement
    }
  }
</script>