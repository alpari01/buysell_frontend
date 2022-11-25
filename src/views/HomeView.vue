<template>
  <div class="row">
    <div class="col-sm-3 mx-auto">
      <h1>See memes here</h1>
      <div class="row g-3">
        <img class="marginauto" src={{meme.url}} alt="">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      meme: ""
    }
  },
  async created() {
    try {
      let response = await axios.get('/api/meme');
      this.meme = response.data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<style>
img {
  display: block;
  max-width:500px;
  max-height:500px;
  width: auto;
  height: auto;
}

.marginauto {
  margin: 10px auto 20px;
  display: block;
}
</style>
