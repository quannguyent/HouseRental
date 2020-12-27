<template>
<main>

  <div class="album py-2 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <b-img thumbnail fluid src="img/room.jpg" alt="Image 1"></b-img>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <b-container class="bv-example-row" style="color:#2D6187">
                  <b-row class="mb-0">
                    <b-col sm="12"> 
                        <h4><b-icon icon="house-fill"></b-icon> Phòng uetx{{roomName}}</h4>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12"><p class="font-italic" style="font-size:90%"><b-icon-geo-alt-fill class="h4"/> Số 144, Xuân Thủy, Cầu Giấy, Hà Nội{{address}}</p></b-col>
                  </b-row>
                  <b-row class="mt-0">
                    <b-col sm="10">
                      <p><b-icon-tag-fill class="h4"/> $3000{{price}}/tháng {{pricePer}}</p>
                    </b-col>
                    <b-col sm="1" class="h4">
                      <b-icon style="color:#28abb9" icon="heart"></b-icon>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card shadow-sm">
            <b-img thumbnail fluid src="img/room.jpg" alt="Image 1"></b-img>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <b-container class="bv-example-row" style="color:#2D6187">
                  <b-row class="mb-0">
                    <b-col sm="12"> 
                        <h4><b-icon icon="house-fill"></b-icon> Phòng uetx{{roomName}}</h4>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12"><p class="font-italic" style="font-size:90%"><b-icon-geo-alt-fill class="h4"/> Số 144, Xuân Thủy, Cầu Giấy, Hà Nội{{address}}</p></b-col>
                  </b-row>
                  <b-row class="mt-0">
                    <b-col sm="10">
                      <p><b-icon-tag-fill class="h4"/> $3000{{price}}/tháng {{pricePer}}</p>
                    </b-col>
                    <b-col sm="1" class="h4">
                      <b-icon style="color:#28abb9" icon="heart"></b-icon>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <b-img thumbnail fluid src="img/room.jpg" alt="Image 1"></b-img>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <b-container class="bv-example-row" style="color:#2D6187">
                  <b-row class="mb-0">
                    <b-col sm="12"> 
                        <h4><b-icon icon="house-fill"></b-icon> Phòng uetx{{roomName}}</h4>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="12"><p class="font-italic" style="font-size:90%"><b-icon-geo-alt-fill class="h4"/> Số 144, Xuân Thủy, Cầu Giấy, Hà Nội{{address}}</p></b-col>
                  </b-row>
                  <b-row class="mt-0">
                    <b-col sm="10">
                      <p><b-icon-tag-fill class="h4"/> $3000{{price}}/tháng {{pricePer}}</p>
                    </b-col>
                    <b-col sm="1" class="h4">
                      <b-icon style="color:#28abb9" icon="heart"></b-icon>
                    </b-col>
                  </b-row>
                </b-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</main>
</template>