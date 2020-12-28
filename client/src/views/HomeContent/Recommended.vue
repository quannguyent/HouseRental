<template>
<main>

  <div class="album py-2 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm" @click="toDetailRoom(rooms[4].id)">
            <b-card
              :img-src="'/img/' + rooms[4].imagePath[0]"
              img-alt="Image"
              img-top
              img-height="225vh"
              tag="article"
              style="max-width: 25rem;"
              class="p-1"

            >
              <b-card-title style="color: #2D6187" class="mb-3">
                <b-icon icon="house-fill"></b-icon>
                {{ rooms[4].title }}
              </b-card-title>
              <b-card-text style="color: #2D6187">
                <div class="mb-2">
                  <b-icon-geo-alt-fill />
                  {{ rooms[4].addressDetail }}
                </div>
                <div>
                  <b-icon-tag-fill />
                  {{ rooms[4].price }}
                  <b-icon
                    style="color: #28abb9;"
                    icon="heart"
                    class="float-right"
                    font-scale="1.5"
                  ></b-icon>
                </div>
              </b-card-text>
            </b-card>
          </div>
        </div>


        <div class="col">
          <div class="card shadow-sm" @click="toDetailRoom(rooms[1].id)">
            <b-card
              :img-src="'/img/' + rooms[1].imagePath[0]"
              img-alt="Image"
              img-top
              img-height="225vh"
              tag="article"
              style="max-width: 25rem;"
              class="p-1"
            >
              <b-card-title style="color: #2D6187" class="mb-3">
                <b-icon icon="house-fill"></b-icon>
                {{ rooms[1].title }}
              </b-card-title>
              <b-card-text style="color: #2D6187">
                <div class="mb-2">
                  <b-icon-geo-alt-fill />
                  {{ rooms[1].addressDetail }}
                </div>
                <div>
                  <b-icon-tag-fill />
                  {{ rooms[1].price }}
                  <b-icon
                    style="color: #28abb9"
                    icon="heart"
                    class="float-right"
                    font-scale="1.5"
                  ></b-icon>
                </div>
              </b-card-text>
            </b-card>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm" @click="toDetailRoom(rooms[3].id)">
            <b-card
              :img-src="'/img/' + rooms[3].imagePath[0]"
              img-alt="Image"
              img-top
              img-height="225vh"
              tag="article"
              style="max-width: 25rem;"
              class="p-1"
            >
              <b-card-title style="color: #2D6187" class="mb-3">
                <b-icon icon="house-fill"></b-icon>
                {{ rooms[3].title }}
              </b-card-title>
              <b-card-text style="color: #2D6187">
                <div class="mb-2">
                  <b-icon-geo-alt-fill />
                  {{ rooms[3].addressDetail }}
                </div>
                <div>
                  <b-icon-tag-fill />
                  {{ rooms[3].price }}
                  <b-icon
                    style="color: #28abb9"
                    icon="heart"
                    class="float-right"
                    font-scale="1.5"
                  ></b-icon>
                </div>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>
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