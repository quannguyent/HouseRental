<template>
  <div class="home">
    <div align="center">
      <b-jumbotron header="EasyAccomond" lead="Tìm nhà trọ mong muốn của mình" class="mb-0" 
      style="min-height:100vh !important;
        padding-top:10vw;
        background-image: url('background.jpg');
        background-repeat: no-repeat; 
        background-attachment: fixed;
        background-size: cover;
        background-size: 100% 100%;">
        <b-input-group size="lg" class="w-40" fixed="top">
          <b-form-input type="search" placeholder="Tìm theo quận, huyện, thành phố" v-on:keyup.enter="{}"></b-form-input>
          <b-input-group-prepend>
            <b-nav-item active to='/room' style="list-style-type: none;">
              <b-icon icon="search" style="color:#2D6187"></b-icon>
            </b-nav-item>
          </b-input-group-prepend>
        </b-input-group>
      </b-jumbotron>
    </div>
    <div>
      <b-jumbotron bg-variant="light" class="p-5" style="max-height:10vh">
        <div class="ml-5" style="color:#28abb9, font-size:20%">
          <p class="h4">TÌM KIẾM HÀNG ĐẦU</p>
        </div>
      </b-jumbotron>
    </div>
    <Post/>
    <div>
      <b-jumbotron bg-variant="light" class="p-5" style="max-height:10vh">
        <div class="ml-5" style="color:#28abb9, font-size:20%">
          <p class="h4">ĐỊA ĐIỂM NỔI BẬT</p>
        </div>
      </b-jumbotron>
    </div>

    <div>
      <b-jumbotron bg-variant="light" class="p-5" style="max-height:10vh">
        <div class="ml-5" style="color:#28abb9, font-size:20%">
          <p class="h4">GIỚI THIỆU CHO BẠN</p>
        </div>
      </b-jumbotron>
    </div>
    <Post/>
  </div>
</template>

<script>
import Post from './HomeContent/Post.vue'
export default {
  components: {
    Post
  }
}
</script>

<style>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .cyan1 {
    color: #28abb9;
  }
  .cyan2 {
    color: #2D6187;
  }
  .cyan3 {
    background-color: #EFFAD3;
  }
  .cyan4 {
    background-color: #a8dda8;
  }
  .w-40{
    width: 35%;
  }
</style>
