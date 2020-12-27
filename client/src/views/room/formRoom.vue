<template>
  <b-container fluid="xl">
    <div class="text-center m-5">
      <h2 v-if="isNewRoom">Tạo bài viết mới</h2>
      <h2 v-if="!isNewRoom">Sửa bài viết</h2>
    </div>

    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <!-- title -->
        <b-form-group id="input-group-2" label="Tiêu đề:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.title"
            placeholder="Nhập tiêu đề"
            required
          ></b-form-input>
        </b-form-group>
        <div v-if="show"></div>
        <!-- description -->
        <b-form-group id="input-group-2" label="Mô tả:" label-for="input-2">
          <b-form-textarea
            id="textarea"
            v-model="form.description"
            placeholder="Mô tả..."
          ></b-form-textarea>
        </b-form-group>
        <!-- note -->
        <b-form-group id="input-group-2" label="Ghi chú:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.note"
            placeholder="Ghi chú"
            required
          ></b-form-input>
        </b-form-group>
        <!-- price -->
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Giá phòng:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.price"
                placeholder="Giá phòng"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <span> / </span>
          <!-- pricePer -->
          <b-col>
            <b-form-group
              id="input-group-3"
              label="Thời gian thuê:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.pricePer"
                :options="pricePer"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- electricPrice -->
        <b-row>
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Giá điện:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.electricPrice"
                placeholder="Giá điện"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <!-- waterPrice -->
          <b-col>
            <b-form-group
              id="input-group-2"
              label="Giá nước:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.waterPrice"
                placeholder="Giá nước"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- typeRealEstate: Nguyên căn, chung cư, homestay -->
        <b-row>
          <b-col class="col-sm-4">
            <b-form-group
              id="input-group-3"
              label="Loại nhà:"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.typeRealEstate"
                :options="typeRealEstates"
                required
              ></b-form-select>
            </b-form-group>
          </b-col>
          <!-- size: Diện tích -->
          <b-col class="col-sm-4">
            <b-form-group
              id="input-group-2"
              label="Diện tích:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.size"
                placeholder="Nhập diện tích"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>

          <!-- state -->
          <b-col class="col-sm-4">
            <b-form-group
              id="input-group-2"
              label="Thành phố:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.state"
                placeholder="Thành phố"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- addressDetail -->
        <b-form-group
          id="input-group-2"
          label="Địa chỉ cụ thể:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.addressDetail"
            placeholder="Địa chỉ cụ thể"
            required
          ></b-form-input>
        </b-form-group>
        <!-- features: tiện ích -->
        <b-form-group id="input-group-2" label="Tiện ích:" label-for="input-2">
          <b-form-textarea
            id="textarea"
            v-model="form.features"
            placeholder="Có nóng lạnh, điều hòa,..."
          ></b-form-textarea>
        </b-form-group>

        <!-- bathroom -->
        <b-form-group id="input-group-2" label="Phòng tắm:" label-for="input-2">
          <br />
          <!-- Tiện ích phòng tắm -->
          <b-row>
            <!-- isPrivate -->
            <b-col class="col-sm-3">
              <b-form-checkbox
                id="checkbox-1"
                v-model="form.isPrivate"
                name="checkbox-1"
                value="true"
                unchecked-value="false"
              >
                Phòng tắm riêng
              </b-form-checkbox>
            </b-col>

            <b-col class="col-sm-9">
              <b-form-input
                id="input-2"
                v-model="form.bathroom"
                placeholder="Có nóng lạnh, bồn tắm,..."
                required
              ></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <!-- kitchenDetail -->
        <b-form-group id="input-group-2" label="Phòng bếp" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.kitchenDetail"
            placeholder="Có bếp ga, bàn ăn..."
            required
          ></b-form-input>
        </b-form-group>

        <!-- image -->
        <b-form-group
          id="input-group-2"
          label="Ảnh của phòng"
          label-for="input-2"
        >
          <b-form-file
            multiple
            :file-name-formatter="formatNames"
          ></b-form-file>
        </b-form-group>

        <div v-if="form.imagePath.length > 0">
          <img v-for="img in form.imagePath" :key="img" :src="'/img/'+ img" width="90px" height="90px" class="m-2" />
        </div>
        <br />

        <!-- <span v-for="file in form.imagePath" :key = "file">
          
        </span> -->

        <div v-if="isNewRoom" class="float-right">
          <b-button type="reset" variant="info" class="m-2">Quay lại</b-button>
          <b-button type="submit" variant="primary" class="m-2 mr-0"
            >Tạo phòng mới</b-button
          >
        </div>

        <div v-if="!isNewRoom" class="float-right">
          <b-button type="reset" variant="info" class="m-2">Quay lại</b-button>
          <b-button type="submit" variant="primary" class="m-2 mr-0"
            >Sửa thông tin phòng</b-button
          >
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import axios from "axios";
import cookieCRUD from "../../mixins/cookie.js";
export default {
  mixins: [cookieCRUD],
  data() {
    return {
      form: {
        title: "",
        description: "",
        note: "",
        price: "",
        pricePer: "",
        electricPrice: "",
        waterPrice: "",
        typeRealEstate: "",
        size: "",
        state: "",
        addressDetail: "",
        features: "",
        imagePath: [],
        bedroom: "",
        bathroom: "",
        isPrivate: false,
        kitchenDetail: "",
      },
      typeRealEstates: [
        "Phòng trọ",
        "Chung cư",
        "Nhà nguyên căn",
        "Trung cư nguyên căn",
      ],
      pricePer: [ "Tháng", "Quý", "Năm"],
      show: true,
      isNewRoom: true,
    };
  },
  methods: {
    formatNames(files) {
      // console.log(files[0])
      files.map((el) => this.form.imagePath.push(el.name));
      // this.form.imagePath = files[0].name;
      return files.length === 1
        ? files[0].name
        : `${files.length} files selected`;
    },
    getRoomDetail(id) {
      const token = this.getCookie("token");
      axios
        .get(`http://localhost:8081/api/real-estate/get-property/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.form = res.data;
          this.isNewRoom = false;
        })
        .catch((err) => {
          console.log(err.response);
          return this.form;
        });
      // return result;
    },
    onSubmit(event) {
      const token = this.getCookie("token");
      var URLreq = "";
      if(this.$route.params.id){
        URLreq = `http://localhost:8081/api/real-estate/edit-property/${this.$route.params.id}`
      }
      else {
        URLreq = "http://localhost:8081/api/real-estate/add-property"
      }
      axios
        .post(URLreq, this.form, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log(res);
          this.$toast.open({
            message: this.$route.params.id ? "Phòng đã được cập nhật" : "Phòng đã được thêm mới",
            type: "success",
            duration: 2000,
            dismissible: true,
            position:"top-right"
          });

            this.$router.push("/room");

        })
        .catch((err) => {
          console.log(err.response);
        });
        event.preventDefault();
    },
    onReset() {
      event.preventDefault();
      // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
        this.$router.push("/room");      
    }
  },
  created() {
    if (this.$route.params.id) {
      // this.form = this.getRoomDetail(this.$route.params.id);
      this.getRoomDetail(this.$route.params.id);
      // this.isNewRoom = false
    }
  },
};
</script>