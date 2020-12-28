<template>
  <div class="album py-2 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm" @click="toSearch()">
            <b-card
              tag="article"
              style="max-width: 25rem;"
              class="p-1"
            >
              <b-card-title style="color: #2D6187" class="mb-3">
                Hà Nội
              </b-card-title>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toSearch() {
      this.$router.push(`/roomSearch`);
    }
  }
}
</script>