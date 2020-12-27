<template>
  <div class="container m-5 p-5">
      {{room.title}}
  </div>
</template>

<script>
import axios from "axios";
import cookieCRUD from "../../mixins/cookie.js";
export default {
  name: "roomDetail",
  mixins: [cookieCRUD],
  data() {
    return {
      room: {},
    };
  },

  methods: {
    getDataRoom(id) {
      const token = this.getCookie("token");
      console.log(token);
      axios
        .get(`http://localhost:8081/api/real-estate/get-property/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          this.room = res.data;
          console.log(this.room);
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.getDataRoom(this.$route.params.id);
  },
};
</script>

<style>
</style>
