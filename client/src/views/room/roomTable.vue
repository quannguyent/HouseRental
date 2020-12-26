<template>
  <div class="m-5 bg-grey">
    <div class="text-right">
      <b-button
        variant="success"
        class="m-5"
        @click="toAddNewRoom()"
      >
        Tạo bài viết
        <i class="fas fa-plus-circle"></i>
      </b-button>
    </div>
    <!-- <b-table striped hover :items="rooms"></b-table> -->
    <div v-for="room in rooms" :key="room" class="row m-5 border bg-white p-2" > 
      <!-- header  -->
      <div class = "col-1 font-weight-bold text-center">Ảnh mô tả</div>
      <div class = "col-1 font-weight-bold text-center">Tiêu đề</div>
      <div class = "col-2 font-weight-bold text-center">Kiểu phòng</div>
      <div class = "col-1 font-weight-bold text-center">Giá phòng</div>
      <div class = "col-2 font-weight-bold text-center">Diện tích</div>
      <div class = "col-3 font-weight-bold text-center">Địa chỉ</div> 
      <div class = "col-2 font-weight-bold text-center">Hành động</div> 
      <!-- body -->
     
      <div class = "col-1 text-center">
         <img src="anh1.jpg" width="80px" height="80px">
      </div>
      <div class = "col-1 text-center">{{room.title}}</div>
      <div class = "col-2 text-center">{{room.typeRealEstate}}</div>
      <div class = "col-1 text-center">{{room.price}}</div>
      <div class = "col-2 text-center">{{room.size}}</div>
      <div class = "col-3 text-center">{{room.addressDetail}}</div>      
      <div class = "col-2 text-center">
        <button class="m-2" @click="toEditRoom(room.id)">
          <i class="far fa-edit"></i>
        </button>
        <button>
        <i class="far fa-trash-alt"></i>
        </button>
        </div>      
    </div>
  </div>
</template>

<script>
import axios from "axios"
import cookieCRUD from "../../mixins/cookie.js";
export default {
  name: "roomTable",
  mixins: [cookieCRUD],
  props: {},
  data() {
    return {
      rooms: [],
      title:["Tiêu đề", "Kiểu phòng"]
    };
  },

  methods: {
    toAddNewRoom() {
      this.$router.push("/room/new");
    },
    toEditRoom(id) {
      this.$router.push(`/room/${id}`);
    },
    changeRooms(data) {
      this.rooms = [];
      data.map(room => {
        this.rooms.push({
          "ti": room.title, 
          "Loại phòng": room.typeRealEstate, 
          "Giá phòng": room.price,
          "Diện tích": room.size,
          "Địa chỉ": room.addressDetail,
          "Hành động": "",
        })
      })
    this.rooms = data;
    },
    getDataRooms() {
      const token = this.getCookie("token");
      console.log(token);
      axios
        .get(
          "http://localhost:8081/api/real-estate/get-list-property",          
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          this.changeRooms(res.data)
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.getDataRooms();
  },
};
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.bg-white{
  background-color: white;
}
.bg-grey{
  background-color: #F7F7F7;
}
</style>
