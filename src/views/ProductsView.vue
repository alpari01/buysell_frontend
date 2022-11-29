<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      page: 0
    }
  },

  methods: {
    async goPageForward() {
      if ((await axios.get("/api/public/products2?page=" + (this.page + 1) + "0&orderBy=id")).data.productList.length > 0) {
        this.page++
        this.products = (await axios.get("/api/public/products2?page=" + this.page + "0&orderBy=id")).data.productList
        console.log(this.products)
      }
    },

    async goPageBack() {
      if (this.page > 0) {
        this.page--
        this.products = (await axios.get("/api/public/products2?page=" + this.page + "0&orderBy=id")).data.productList
        console.log(this.products)
      }
    }
  },

  async created() {
    this.products = (await axios.get("/api/public/products2?page=0&orderBy=id")).data.productList;
  }
}
</script>

<template>
  <div class="col-sm-6 mx-auto">
    <input type="button" v-on:click="goPageBack" class="btn btn-primary btn-sm" style="margin-right: 5px" value="←">
    <input type="button" v-on:click="goPageForward" class="btn btn-primary btn-sm" style="margin-left: 5px" value="→">
  </div>

  <div class="col-sm-3 mx-auto">
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr v-for="product of products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
figcaption {
  font-size: 35px
}

table {
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 20px;
  word-break: break-word;
}
th {
  border-bottom: 1px solid #3a3a3a;
}
td {
  width: 150px;
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #ababab;
}
</style>