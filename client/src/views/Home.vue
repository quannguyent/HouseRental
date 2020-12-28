<template>
  <div class="home">
    <div align="center">
      <b-jumbotron header="EasyAccomond" lead="Tìm nhà trọ mong muốn của mình" class="mb-0" 
      style="min-height:100vh !important;
        padding-top:12vw;
        background-image: url('img/background.jpg');
        background-repeat: no-repeat; 
        background-attachment: fixed;
        background-size: cover;
        background-size: 100% 100%;">
           <b-button variant="outline-primary" style="backgroundColor:#2d6187; color:white" to='/roomSearch'>Khám phá ngay
              <b-icon icon="search" style="color:white" class="ml-2"></b-icon>
           </b-button>
      </b-jumbotron>
    </div>
    <div>
      <b-jumbotron bg-variant="light" class="p-5" style="max-height:10vh">
        <div class="ml-5" style="background-color:#28abb9, font-size:20%">
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
    <Places/>
    <div>
      <b-jumbotron bg-variant="light" class="p-5" style="max-height:10vh">
        <div class="ml-5" style="color:#28abb9, font-size:20%">
          <p class="h4">GIỚI THIỆU CHO BẠN</p>
        </div>
      </b-jumbotron>
    </div>
    <Recommended/>
  </div>
</template>

<script>
import Post from './HomeContent/Post.vue'
import Recommended from './HomeContent/Recommended.vue'
import Places from './HomeContent/Places.vue'
export default {
  components: {
    Post,
    Recommended,
    Places
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
    color: #2D6187 !important ;
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
