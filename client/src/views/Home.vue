<template>
  <div class="home">
    <div align="center">
      <b-jumbotron header="EasyAccomond" lead="Tìm nhà trọ mong muốn của mình">
        <b-input-group size="lg" class="mb-2 w-40">
          <b-form-input type="search" placeholder="Tìm theo quận, huyện, thành phố" v-on:keyup.enter="{}"></b-form-input>
          <b-input-group-prepend>
            <b-nav-item active to='/room' style="list-style-type: none;">
              <b-icon icon="search" style="color:#2D6187"></b-icon>
            </b-nav-item>
          </b-input-group-prepend>
        </b-input-group>
      </b-jumbotron>
    </div>
    <Post/>
  </div>
</template>

<script>
import Post from '../components/Post.vue'
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
    background-color: #28abb9;
  }
  .cyan2 {
    background-color: #2D6187;
  }
  .cyan3 {
    background-color: #EFFAD3;
    color: black
  }
  .cyan4 {
    background-color: #a8dda8;
  }
  .w-40{
    width: 35%;
  }
</style>
