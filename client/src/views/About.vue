<template>
  <div class="about">
    <b-jumbotron header="Về chúng tôi" lead="Tìm nhà trọ mong muốn của mình" class="title">
      <b-button variant="info" href="#">Liên hệ ngay</b-button>
    </b-jumbotron>
    <b-jumbotron header="Đội ngũ phát triển" lead="Xin gửi lời cảm ơn đến các thành viên tham gia dự án" class="thanks" align="right" bg-variant="light">
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  components: {},
  name : 'About', 
  props : {
  } 
}
</script>

<style>
.about {

}
.title {
  min-height: 100vh;
  margin: 0;
  padding-top: 50vh;
  padding-left: 10vw;
}
.thanks {
  min-height: 100vh;
  margin: 0;
  padding-top: 50vh;
  padding-right: 10vw;
}
</style>
