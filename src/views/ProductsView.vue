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

  <div class="col-sm-10 mx-auto">
    <table>
      <caption></caption>
      <tr>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="product of products" :key="product.id">
        <td><img src="https://img1.russianfood.com/dycontent/images_upl/577/big_576308.jpg" class="rounded-card" alt="image"></td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

table {
}

td {
  width: 33%;
  border-bottom: 1px solid #ababab;
}

th {
  padding: 10px;
  border-bottom: 1px solid #ababab;
}

img {
  max-height: 500px;
  max-width: 500px;
  height: auto;
  width: auto;
  padding: 20px;
}

.rounded-card{
  border-radius: 15%;
}

</style>