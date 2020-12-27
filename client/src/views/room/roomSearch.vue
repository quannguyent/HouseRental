<template>
  <div class="container m-5 p-5">
    <!-- filter -->
    <div class="">

      <b-form inline >
        <!-- filterTitle -->
        <b-form-input
          id="inline-form-input-name"
          class="mb-4 mr-sm-4 mb-sm-4"
           v-model="filter.title"
          placeholder="Tìm theo tiêu đề"
        ></b-form-input>
        <!-- filterAddressDetail -->
        <b-form-input
          id="inline-form-input-name"
          class="mb-4 mr-sm-4 mb-sm-4"
           v-model="filter.addressDetail"
          placeholder="Tìm theo địa chỉ"
        ></b-form-input>
        <!-- filterTypeRealEstates -->
        <b-form-select
                id="input-3"
                class="mb-4 mr-sm-4 mb-sm-4"
                v-model="filter.typeRealEstate"
                :options="typeRealEstates"
                required
              ></b-form-select>
        <b-button class="mb-4 mr-sm-4 mb-sm-4" @click="getDataRoomsSearch" variant="primary">Tìm</b-button>
      </b-form>
    </div>

    <div class="row">
      <div
        v-for="room in rooms"
        :key="room"
        class="col-sm-4"
        @click="toDetailRoom(room.id)"
      >
        <b-card
          :img-src="'/img/' + room.imagePath[0]"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2 p-1"
        >
          <b-card-title style="color: #28abb9">
            <b-icon icon="house-fill"></b-icon>
            {{ room.title }}
          </b-card-title>
          <b-card-text style="color: #28abb9">
            <div>
              <b-icon-geo-alt-fill />
              {{ room.addressDetail }}
            </div>
            <div>
              <b-icon-tag-fill />
              {{ room.price }}
              <b-icon
                style="color: #28abb9"
                icon="heart"
                class="float-right"
              ></b-icon>
            </div>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookieCRUD from "../../mixins/cookie.js";
export default {
  name: "roomSearch",
  mixins: [cookieCRUD],
  data() {
    return {
      rooms:[],
      typeRealEstates: [
        "Phòng trọ",
        "Chung cư",
        "Nhà nguyên căn",
        "Trung cư nguyên căn",],
      filter: {
        title:"",
        addressDetail:"",
        typeRealEstate:""
      },
    };
  },
  methods: {
    toDetailRoom(id) {
      this.$router.push(`/roomDetail/${id}`);
    },
    getDataRoomsSearch() {
      const token = this.getCookie("token");
      console.log(token);
      axios
        .post("http://localhost:8081/api/real-estate/get-property-filter",this.filter, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          this.rooms = res.data
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
  created() {
    this.getDataRoomsSearch();
  }
};
</script>

<style>
</style>
