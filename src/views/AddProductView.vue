<template>
  <div class="login mt-4">
    <div class="row">
      <div class="col-sm-3 mx-auto">
        <h1>Add new product</h1>
        <br>
        <form @submit="postData">
          <div class="mb-3">
            <input type="text" class="form-control" id="inputProductUserId" v-model="posts.userId" placeholder="User id">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" id="inputProductName" v-model="posts.name" placeholder="Product name">
          </div>
          <div class="mb-3">
            <div class="form-floating">
              <textarea class="form-control" v-model="posts.description" placeholder="Product description" id="inputProductDescription" style="height: 100px"></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      posts: {
        userId: null,
        name: null,
        description: null,
      }
    }
  },
  methods: {
    postData() {
      this.posts = axios.post('/api/products', this.posts)
    }
  }
};
</script>

<style scoped>

</style>