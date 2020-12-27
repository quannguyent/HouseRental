<template>
  <div class="m-5 bg-grey">
    <div class="text-right">
      <b-button variant="success" class="m-5" @click="toAddNewRoom()">
        Tạo bài viết
        <i class="fas fa-plus-circle"></i>
      </b-button>
    </div>

    <!-- confirm delete -->
    <b-modal id="confirmDelete" hide-footer>
      <template #modal-title> Xác nhận xóa bài đăng </template>
      <div class="d-block text-center">
        <p>Bạn có chắc chắn xóa bài đăng này không?</p>
      </div>
      <div class="text-right">
        <b-button
          class="m-1"
          variant="primary"
          @click="$bvModal.hide('confirmDelete')"
          >Hủy</b-button
        >
        <b-button class="m-1" variant="danger" @click="deleteRoom()"
          >Xóa bài đăng</b-button
        >
      </div>
    </b-modal>

    <!-- confirm approve -->
    <b-modal id="confirmApprove" hide-footer>
      <template #modal-title> Xác nhận duyệt bài đăng </template>
      <div class="d-block text-center">
        <p>Bạn có chắc chắn duyệt bài đăng này không?</p>
      </div>
      <div class="text-right">
        <b-button
          class="m-1"
          variant="primary"
          @click="$bvModal.hide('confirmApprove')"
          >Hủy</b-button
        >
        <b-button class="m-1" variant="warning" @click="approveRoom()"
          >Duyệt bài đăng</b-button
        >
      </div>
    </b-modal>

    <!-- <b-table striped hover :items="rooms"></b-table> -->

    <div v-for="room in rooms" :key="room" class="row m-5 border bg-white p-2 shadow">
      <div class="col-1 text-center">
        <img :src="'/img/'+ room.imagePath[0]" width="90px" height="90px" />
      </div>
      <div class="col-1 text-center mt-2">
        <div class="font-weight-bold">Tiêu đề</div>
        <div class="mt-4">{{ room.title }}</div>
      </div>

      <div class="col-1 text-center mt-2">
        <div class="font-weight-bold">Giá phòng</div>
        <div class="mt-4">{{ room.price }}</div>
      </div>

      <div class="col-2 text-center mt-2">
        <div class="font-weight-bold">Diện tích</div>
        <div class="mt-4">{{ room.size }}</div>
      </div>

      <div class="col-3 text-center mt-2">
        <div class="font-weight-bold">Địa chỉ</div>
        <div class="mt-4">{{ room.addressDetail }}</div>
      </div>

      <div class="col-2 text-center mt-2">
        <div class="font-weight-bold">Trạng thái</div>
        <div class="mt-4">{{ room.isApprove ? "Đã duyệt" : "Chưa duyệt" }}</div>
      </div>

      <div class="col-2 text-center mt-2">
        <div class="font-weight-bold">Hành động</div>
        <div class="mt-2">
          <button
            class="btn btn-icon btn-light btn-hover-success btn-sm m-2"
            @click="showConfirmApprove(room.id)"
          >
            <i class="far fa-check-circle text-success"></i>
          </button>
          <button
            class="btn btn-icon btn-light btn-hover-primary btn-sm m-2"
            @click="toEditRoom(room.id)"
          >
            <i class="far fa-edit text-primary"></i>
          </button>
          <button
            class="btn btn-icon btn-light btn-hover-danger btn-sm m-2"
            @click="showConfirmDelete(room.id)"
          >
            <i class="far fa-trash-alt text-danger"></i>
          </button>
        </div>
        <!-- body -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookieCRUD from "../../mixins/cookie.js";
export default {
  name: "roomTable",
  mixins: [cookieCRUD],
  props: {},
  data() {
    return {
      rooms: [],
      title: ["Tiêu đề", "Kiểu phòng"],
      idRoomDelete: "",
      idRoomApprove: "",
    };
  },

  methods: {
    toAddNewRoom() {
      this.$router.push("/room/new");
    },
    toEditRoom(id) {
      this.$router.push(`/room/${id}`);
    },
    showConfirmApprove(id) {
      this.idRoomApprove = id;
      this.$bvModal.show("confirmApprove");
    },
    showConfirmDelete(id) {
      this.idRoomDelete = id;
      this.$bvModal.show("confirmDelete");
    },
    deleteRoom() {
      const token = this.getCookie("token");
      axios
        .delete(
          `http://localhost:8081/api/real-estate/delete-property/${this.idRoomDelete}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then(() => {
          this.$bvModal.hide("confirmDelete");
          this.$toast.open({
            message: "Đã xóa bài đăng thành công",
            type: "success",
            duration: 2000,
            dismissible: true,
            position: "top-right",
          });
          this.getDataRooms();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    approveRoom() {
      const token = this.getCookie("token");
      axios
        .post(
          `http://localhost:8081/api/real-estate/approve-property/${this.idRoomApprove}`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then(() => {
          this.$bvModal.hide("confirmApprove");
          this.$toast.open({
            message: "Đã duyệt bài đăng thành công",
            type: "success",
            duration: 2000,
            dismissible: true,
            position: "top-right",
          });
          this.getDataRooms();
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    changeRooms(data) {
      this.rooms = [];
      data.map((room) => {
        this.rooms.push({
          ti: room.title,
          "Loại phòng": room.typeRealEstate,
          "Giá phòng": room.price,
          "Diện tích": room.size,
          "Địa chỉ": room.addressDetail,
          "Hành động": "",
        });
      });
      this.rooms = data;
    },
    getDataRooms() {
      const token = this.getCookie("token");
      console.log(token);
      axios
        .get("http://localhost:8081/api/real-estate/get-list-property", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          this.changeRooms(res.data);
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
.bg-white {
  background-color: white;
}
.bg-grey {
  background-color: #f7f7f7;
}
.shadow {
  box-shadow: 1px 0px 31px 6px rgba(0,0,0,0.75);
}
</style>
