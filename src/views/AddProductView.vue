<template>
  <div class="row">
    <div class="col-sm-3 mx-auto">
      <h1>Add new product</h1>
      <br>
      <form class="row g-3">
        <div class="col-12">
          <label for="inputProductName" class="form-label">Name</label>
          <input type="text" class="form-control" id="inputProductName" v-model="posts.name" placeholder="e.g. Milk">
        </div>
        <div class="col-12">
          <div class="form-floating">
            <label for="inputProductDescription" class="form-label">Description</label>
            <textarea class="form-control" v-model="posts.description" placeholder="e.g. Very tasty, I milked it myself..." id="inputProductDescription" style="height: 100px"></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputProductPrice" class="form-label">Price (€)</label>
          <input type="text" pattern="[0-9.]+[0-9]{2}" class="form-control" id="inputProductPrice" v-model="posts.price" placeholder="0.00">
        </div>
        <div class="col-md-6">
          <label for="inputProductCategory" class="form-label">Category</label>
          <input list="categories" v-model="posts.categoryName" placeholder="Choose..." required id="inputProductCategory">
          <datalist id="categories">
            <option value="Animals"></option>
            <option value="Meal"></option>
            <option value="Furniture"></option>
            <option value="Electronics"></option>
            <option value="Clothes"></option>
          </datalist>
          <br>
          <br>
        </div>
        <div class="col-12">
          <input type="button" v-on:click="postData" class="btn btn-primary" value="Add">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueJwtDecode from 'vue-jwt-decode'

export default {
  data(){
    return {
      posts: {
        userId: null,
        name: null,
        price: null,
        description: null,
        categoryId: null,
        categoryName: null,
      }
    }
  },
  methods: {
    postData() {
      let token = JSON.parse(localStorage.getItem("token"))
      if (token != null) {
        let userData = VueJwtDecode.decode(token);
        this.posts.userId = userData["id"]
        this.posts = axios.post('/api/public/products', this.posts)
      }
      else alert("User not logged in.")
    }
  }
};
</script>

<style scoped>
</style>