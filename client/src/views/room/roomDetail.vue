<template>
<b-jumbotron align="center p-0" style="margin-left:15vw; margin-right:15vw">
  <div class="m-5" align="left">

    <div class="title mt-0 pt-0">
      <h1 style="color:#28abb9"> {{room.title}} </h1>
      <b-leader> <b-icon-geo-alt-fill/> {{room.addressDetail}} </b-leader>
      <p><b-icon-tag-fill/> {{room.price}}/{{room.pricePer}}</p>
    </div>

    <b-row class="mt-3">
    <b-col>
      <b-row>
        <img :src="'/img/' + room.imagePath[0]" alt="i1" width="500rem" height="400rem" class="m-2">
      </b-row>
    </b-col>
    <b-col>
      <b-row>
        <img :src="'/img/' + room.imagePath[1]" alt="i2" width="250rems" height="190rem" class="m-2">
      </b-row>
      <b-row> 
        <img :src="'/img/' + room.imagePath[2]" alt="i3" width="250rems" height="190rem" class="m-2">
      </b-row>
    </b-col>
    </b-row>  
      
    <div class="features mt-3">
      <h2 style="color:#2d6187">Thông tin chi tiết</h2>
      <b-container class="m-0 mb-3">
      <b-row cols="4" class="m-0 mb-3">
        <b-col cols="2" md="2">Loại phòng:</b-col>
        <b-col cols="4" md="4">{{room.typeRealEstate}}</b-col>
        <b-col cols="2" md="2">Diện tích:</b-col>
        <b-col cols="4" md="4">{{room.size}}</b-col>
      </b-row>
      <b-row cols="4" class="m-0 mb-3">
        <b-col cols="2" md="2">Tiền nước:</b-col>
        <b-col cols="4" md="4">{{room.waterPrice}}</b-col>
        <b-col cols="2" md="2">Tiền điện:</b-col>
        <b-col cols="4" md="4">{{room.electricPrice}}</b-col>
      </b-row>
      <b-row cols="4" class="m-0 mb-3">
        <b-col cols="2" md="2">Phòng tắm:</b-col>
        <b-col cols="1" md="1"><p v-if="room.isPrivate">Riêng</p><p v-if="!room.isPrivate">Chung</p></b-col>
        <b-col cols="3" md="3">{{room.bathroom}}</b-col>
        <b-col cols="2" md="2">Phòng bếp:</b-col>
        <b-col cols="4" md="4">{{room.size}}</b-col>
      </b-row>
      <b-row cols="2" class="m-0 mb-3">
        <b-col cols="2" md="2">Tiện ích:</b-col>
        <b-col cols="12" md="10">{{room.features}}</b-col>
      </b-row>
    </b-container>
    </div> 

    <div class="description mt-3">
      <h2 style="color:#2d6187"> Mô tả </h2>
      <p> {{room.description}} </p> <br>
    </div> 

    <div class="host">
      
    </div>
    
    <div class="contact">
      <b-button style="width:10vw; margin-right:1vw; background-color:#ef4f4f"><b-icon-heart/>  Yêu thích</b-button>
      <b-button style="width:10vw; margin-right:1vw; background-color:#16c79a"><b-icon-telephone/>    Liên hệ</b-button>
    </div>
  </div>
</b-jumbotron>
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
          console.log(res.data)
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
